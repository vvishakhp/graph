import { Vertex } from "./ts-vertex";
import { UiItem } from "./ts-ui-item";
import { newId } from "../util/misc";
import { PathHelper } from "../util/path/ts-path";
import { Context } from "./ts-context";
import { Direction } from "../util/path/ts-curve";
import { Point } from "../util/geometry/ts-point";
import { forEach, forOwn } from 'lodash';


export interface IEdgeType {
    endMarker?: string,
    startMarker?: string;
    midMarker?: string;

    pathHelper: () => PathHelper;

    attributes?: { [key: string]: string };

}

export class Edge extends UiItem {

    private pathHelper: PathHelper;

    private path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    private path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    private startPoint: Point = new Point();
    private endPoint: Point = new Point();

    constructor(ctx: Context, private fromVert: Vertex, private toVert: Vertex, private edgeType: IEdgeType) {
        super(ctx, 'edge');

    }

    create() {
        this.el = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        this.el.appendChild(this.path1); this.el.appendChild(this.path2);
        this.path2.setAttributeNS(null, 'stroke', 'transparent');
        this.path2.setAttributeNS(null, 'stroke-width', '10');
        this.addToView();
        this.pathHelper = this.edgeType.pathHelper();
        const box1 = this.fromVert.BBox();
        const box2 = this.toVert.BBox();
        this.updateStart(new Point(box1.x, box1.y), Direction.VERTICAL);
        this.updateEnd(new Point(box2.x, box2.y), Direction.HORIZONTAL);
    }

    applyMarkers() {
        this.edgeType.endMarker && this.ctx.markers.get(this.edgeType.endMarker).applyTo(this.path1, 'end');
        this.edgeType.startMarker && this.ctx.markers.get(this.edgeType.startMarker).applyTo(this.path1, 'start');
        this.edgeType.midMarker && this.ctx.markers.get(this.edgeType.midMarker).applyTo(this.path1, 'start');
    }

    updateStyle() {
        this.applyMarkers()
    }

    updateAttr() {
        this.applyPath();
        this.edgeType.attributes && forOwn(this.edgeType.attributes, (v, k) => this.el.setAttributeNS(null, k, v));
    }

    public applyPath() {
        // debugger;
        this.pathHelper.setStart(this.startPoint);
        this.pathHelper.setEnd(this.endPoint);
        const p = this.pathHelper.getPathData();
        this.path1.setAttributeNS(null, 'd', p);
        this.path2.setAttributeNS(null, 'd', p);
    }

    public updateStart(point: Point | number, direction: Direction) {
        // debugger;
        if (typeof point === "number") {
            point = (this.fromVert.BBox()).pointFromPercent(point);
        }
        this.startPoint = point;
        this.pathHelper.setStart(point);
        this.setStartDirection(direction);
    }

    public updateEnd(point: Point | number, direction: Direction) {
        if (typeof point === "number") {
            point = (this.toVert.BBox()).pointFromPercent(point);
        }
        this.endPoint = point;
        this.pathHelper.setEnd(point);
        this.setEndDirection(direction);
    }

    public setStartDirection(direction: Direction) {
        this.pathHelper.setStartDirection(direction);
    }

    public setEndDirection(direction: Direction) {
        this.pathHelper.setEndDirection(direction);
    }
}