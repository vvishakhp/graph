import { Context } from "../ts-context";
import { Point } from "../util/ts-point";
import { Utils } from "../util/ts-utils";

export class Vertex {

    public readonly id: string = Utils.newId();

    public el: SVGGElement;

    private position: Point;
    private size: Point;

    constructor(public ctx: Context, private typeName) {
        this.el = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        this.create();
        this.el.setAttribute('data-id', this.id);
    }

    create() {
        this.position = new Point();
        this.size = new Point(1, 1);
        this.applyTransform();
        this.ctx.addVertexElement(this.el);
        this.el.appendChild(this.ctx.vertexReg.get(this.typeName, { text: 'Hello' }));
    }

    moveTo(x: number | Point, y: number = 0) {
        if (typeof x === 'number') {
            this.position.x = x;
            this.position.y = y;
        } else {
            this.position = x.clone();
        }
        this.applyTransform();
    }

    scale(x: number | Point, y: number = null) {
        if (typeof x === 'number') {
            this.size.x = x;
            if (y) {
                this.size.y = y;
            } else {
                this.size.y = x;
            }
        } else {
            this.size = x.clone();
        }
        this.applyTransform();
    }

    private applyTransform() {
        this.el.setAttributeNS(null, 'transform', `translate(${this.position.toString()}) scale(${this.size.toString()})`);
    }

    public get BBox(): DOMRect {

        let bb = this.el.getBBox(),
            svg = this.el.ownerSVGElement,
            m = this.getMatrix(this.el.parentNode as SVGGraphicsElement);

        // Create an array of all four points for the original bounding box
        var pts = [
            svg.createSVGPoint(), svg.createSVGPoint(),
            svg.createSVGPoint(), svg.createSVGPoint()
        ];
        pts[0].x = bb.x; pts[0].y = bb.y;
        pts[1].x = bb.x + bb.width; pts[1].y = bb.y;
        pts[2].x = bb.x + bb.width; pts[2].y = bb.y + bb.height;
        pts[3].x = bb.x; pts[3].y = bb.y + bb.height;

        // Transform each into the space of the parent,
        // and calculate the min/max points from that.    
        var xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity;
        pts.forEach(function (pt) {
            pt = pt.matrixTransform(m);
            xMin = Math.min(xMin, pt.x);
            xMax = Math.max(xMax, pt.x);
            yMin = Math.min(yMin, pt.y);
            yMax = Math.max(yMax, pt.y);
        });

        // Update the bounding box with the new values
        bb.x = xMin; bb.width = xMax - xMin;
        bb.y = yMin; bb.height = yMax - yMin;
        return bb;

    }

    public getMatrix(toElement: SVGGraphicsElement) {
        return toElement.getScreenCTM().inverse().multiply(this.el.getScreenCTM());
    }

    public dispose() {
        this.el.remove();
    }
}