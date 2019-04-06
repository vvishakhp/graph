import { Vertex } from "./ts-vertex";
import { UiItem } from "./ts-ui-item";
import { newId } from "../util/misc";
import { IPathHelper } from "../util/path/ts-path";

export enum EdgeType {
    STRAIGHT,
    POLYLINE,
    CURVE
}

export class Edge extends UiItem {

    public readonly id = newId();

    private pathHelper: IPathHelper;

    constructor(from: Vertex, to: Vertex, type: EdgeType) {
        super();
    }

    async create() {
        this.el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    }

    updateStyle(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    updateAttr(): Promise<any> {
        throw new Error("Method not implemented.");
    }
}