import { Context } from "../ts-context";
import { Vertex } from "./ts-vertex";
import { Point } from "../util/ts-point";
import { Edge } from "./ts-edge";
import { Overlay } from "./ts-overlay";

export class GraphModel {

    private vertices: Array<Vertex> = [];
    private edges: Array<Edge> = [];

    constructor(public context: Context) {
        context.setGraphModel(this);
    }

    public addVertex(type: string = 'default', x?: number, y?: number) {
        const vert = new Vertex(this.context, type);
        this.vertices.push(vert);
        vert.moveTo(new Point(x, y));
        return vert;
    }

    public addEdge(from: Vertex | string, to: Vertex | string): Edge {
        const edge = new Edge(this.context,
            (typeof from === 'string') ? this.findVertex(from) : from,
            (typeof to === 'string') ? this.findVertex(to) : to);
        this.edges.push(edge);
        return edge;
    }

    public removeEdge(edge: Edge | string) {
        let e = ((typeof edge === 'string') ? this.findEdge(edge) : edge);
        this.edges.splice(this.edges.indexOf(e), 1);
        e.dispose();
        e = null;
    }

    public removeVetrex(vertex: string | Vertex) {
        let v = ((typeof vertex === 'string') ? this.findVertex(vertex) : vertex);
        this.vertices.splice(this.vertices.indexOf(v), 1);
        v.dispose();
        v = null;
    }


    public findEdge(id: string): Edge {
        return this.edges.find(e => e.id === id);
    }

    public findVertex(id: string): Vertex {
        return this.vertices.find(v => v.id === id);
    }

    public findOverlay(id: string): Overlay {
        // TODO - Impliment find overlay
        // throw new Error('Not implimented');
        return null
    }

    findItem(id: string): Edge | Vertex | Overlay {
        return this.findEdge(id) || this.findVertex(id) || this.findOverlay(id);
    }
}