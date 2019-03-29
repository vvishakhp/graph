import { Context } from "../ts-context";
import { Point } from "../util/ts-point";
import { Vertex } from "./ts-vertex";
import { Utils } from "../util/ts-utils";

export type EdgeType = 'straight' | 'curved' | 'bend';

export class Edge {

    public readonly id = Utils.newId();

    public el: SVGPathElement;

    public points: Array<{ x: number, y: number }> = [];

    private cornerRadius = 3;

    public fromPoint: Point;
    private pathData: string;

    public toPoint: Point = new Point();

    public constructor(private ctx: Context, private fromVert: Vertex, private toVert: Vertex, private edgeType: EdgeType = 'straight', private from: number = -1, private to: number = -1) {
        let autoP = Utils.findAutoEdge(this.fromVert.BBox, this.toVert.BBox);
        from = from < 0 ? autoP.p1 : from
        this.setStart(from);
        to = to < 0 ? autoP.p2 : to
        this.setEnd(to);
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
        if (this.edgeType === 'straight') {
            const points: string[] = [];
            points.push('M' + this.fromPoint.toString());
            points.push('L' + this.toPoint.toString());
            this.pathData = points.join(' ');
        } else if (this.edgeType === 'curved') {
            const p = Utils.calcCurvePoints(this.fromPoint, this.toPoint, this.from, this.to);
        } else if (this.edgeType === 'bend') {

        }
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