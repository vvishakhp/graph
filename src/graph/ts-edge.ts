import { Context } from "../ts-context";
import { Point } from "../util/ts-point";
import { Vertex } from "./ts-vertex";
import { Utils } from "../util/ts-utils";
import { PathUtil } from "../util/ts-path";

export type EdgeType = 'straight' | 'curved' | 'polyline';

export class Edge {

    public readonly id = Utils.newId();

    public el: SVGPathElement;

    public points: Array<{ x: number, y: number }> = [];

    private cornerRadius = 3;

    public startPoint: Point;
    private pathData: string;

    public endPoint: Point = new Point();

    private from: number;
    private to: number;

    public constructor(private ctx: Context, private fromVert: Vertex, private toVert: Vertex,
        private edgeType: EdgeType = 'straight', from: number = -1, to: number = -1) {
        let autoP = Utils.findAutoEdge(this.fromVert.BBox, this.toVert.BBox);

        this.from = (from < 0) ? autoP.p1 : this.from;
        this.to = (to < 0) ? autoP.p2 : this.to;
        this.setStart(from, false);
        this.setEnd(to, false);

        this.create();
    }

    private create() {
        this.el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        this.el.setAttribute('data-id', this.id);
        this.update();
        this.ctx.addEdgeElement(this.el);
    }

    public setStart(from: number, update: boolean = true): Edge {
        this.startPoint = Utils.calcPointInRect(this.fromVert.BBox, from);
        debugger
        update && this.calcPath();
        return this;
    }

    public setEnd(p: number, update: boolean = true): Edge {
        this.endPoint = Utils.calcPointInRect(this.toVert.BBox, p);
        update && this.calcPath();
        return this;
    }

    public setEdgeType(type: EdgeType) {
        this.edgeType = type;
        this.updateAttr();
    }

    private calcPath() {
        if (this.edgeType === 'straight') {
            const points: string[] = [];
            points.push('M' + this.startPoint.toString());
            points.push('L' + this.endPoint.toString());
            this.pathData = points.join(' ');
        } else if (this.edgeType === 'curved') {
            // const p = Utils.calcCurvePoints(this.fromPoint, this.toPoint, this.from, this.to);
            throw new Error('Curved edge is not implimented yet');
        } else if (this.edgeType === 'polyline') {
            let path: PathUtil;
            Utils.markPoint(this.ctx.svg, Utils.calcPolyPoints(this.startPoint, this.endPoint, this.from, this.to))
            Utils.calcPolyPoints(this.startPoint, this.endPoint, this.from, this.to).forEach(p => {
                path ? path.lineTo(p) : path = new PathUtil(p);
            });
            this.pathData = path.getPath();
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