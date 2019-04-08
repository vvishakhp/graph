import { UiItem } from "./ts-ui-item";
import { Context } from "./ts-context";
import { Point } from "../util/geometry/ts-point";
import { Rect } from "../util/geometry/ts-rect";


export class Vertex extends UiItem {

    private position: Point;

    constructor(ctx: Context, private templateType: string) {
        super(ctx, 'vertex');
    }

    create() {
        this.el = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        this.el.appendChild(this.ctx.templateCompiler.parseTemplate(this.ctx.vertexReg.getType(this.templateType), {}));
        this.addToView();
    }

    moveTo(point: Point) {
        const rect = this.BBox();
        this.position = new Point(point.x - rect.w / 2, point.y - rect.h / 2);
        this.position = point.clone();
    }

    public BBox(): Rect {
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
        return new Rect(bb.x + bb.width / 2, bb.y + bb.height / 2, bb.height, bb.width);
    }

    updateStyle() {

    }

    updateAttr() {
        this.el.setAttributeNS(null, 'transform', `translate(${this.position.toString()})`);
    }

    public getMatrix(toElement: SVGGraphicsElement): DOMMatrix {
        return toElement.getScreenCTM().inverse().multiply(this.el.getScreenCTM());
    }
}
