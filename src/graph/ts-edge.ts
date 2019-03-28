import { Context } from "../ts-context";
import { Point } from "../util/ts-point";
import { Vertex } from "./ts-vertex";
import { Utils } from "../util/ts-utils";

export class Edge {

    public readonly id = Utils.newId();

    private start = new Point();
    private end = new Point();

    public el: SVGPathElement;

    public points: Array<{ x: number, y: number }> = [];

    private cornerRadius = 3;

    public fromPoint: Point;
    private pathData: string;

    toPoint: Point = new Point();

    public constructor(private ctx: Context, private fromVert: Vertex, private toVert: Vertex, from: number = -1, to: number = -1) {
        let autoP = Utils.findAutoEdge(this.fromVert.BBox, this.toVert.BBox);
        this.setStart(from < 0 ? autoP.p1 : from);
        this.setEnd(to < 0 ? autoP.p2 : to);
        this.create();
    }

    private create() {
        this.el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        this.ctx.addEdgeElement(this.el);
        this.update();
        this.el.setAttribute('data-id', this.id);
    }

    public setStart(from: number): Edge {
        this.fromPoint = Utils.calcPointInRect(this.fromVert.BBox, from);
        this.calcPath();
        return this;
    }

    public setEnd(p: number): Edge {
        this.toPoint = Utils.calcPointInRect(this.toVert.BBox, p);
        this.calcPath();
        return this;
    }

    private calcPath() {
        const points: string[] = [];
        points.push('M' + this.fromPoint.toString());
        points.push('L' + this.toPoint.toString());
        this.pathData = points.join(' ');
    }

    dispose() {
        this.el.remove();
    }

    public updateStyle() {
        this.el.setAttributeNS(null, 'stroke', 'black');
        this.el.setAttributeNS(null, 'fill', 'none');
    }

    public updateAttr() {
        this.calcPath();
        this.el.setAttributeNS(null, 'd', this.pathData);
    }

    public update() {
        this.updateAttr();
        this.updateStyle();
    }
}