import { TSVertexRegistry } from "./ts-vertex-reg";
import { EdgeRegisry } from "./ts-edge-reg";
import { Utils } from "../util/ts-utils";
import { Context } from "../ts-context";
import { Vertex } from "./ts-vertex";
import { Point } from "../util/ts-point";

export class GraphModel {

    private vertices: Array<Vertex> = [];
    private edges: Array<any> = [];

    constructor(public context: Context) {

    }

    public addVertex(type?: string, id?: string, x?: number, y?: number) {
        const vert = new Vertex(this.context);
        this.vertices.push(vert);
        console.log(vert.BBox);
        vert.moveTo(new Point(20, 20))
    }

    public addEdge() {

    }

    public removeEdge() {

    }

    public removeVetrex() {

    }

}