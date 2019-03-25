import { Context } from "../ts-context";
import { Point } from "../util/ts-point";
import { Utils } from "../util/ts-utils";

export class Vertex {

    public readonly id: string = Utils.newId();

    public el: SVGGElement;

    private position: Point;
    private size: Point;

    public get BBox(): DOMRect {
        return this.el.getBBox();
    }

    constructor(public ctx: Context, private typeName = 'default') {
        this.el = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        this.create();
        this.el.setAttribute('data-id', this.id);
    }

    create() {
        this.position = new Point();
        this.size = new Point(1, 1);
        this.applyTransform();
        this.ctx.addVertexElement(this.el);
        this.el.appendChild(this.ctx.vertexReg.get(this.typeName));
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
}