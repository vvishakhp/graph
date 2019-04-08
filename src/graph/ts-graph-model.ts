import { Edge, IEdgeType } from "./ts-edge";
import { Vertex } from "./ts-vertex";
import { Point } from "../util/geometry/ts-point";
import { Context } from "./ts-context";
import { Overlay } from "./ts-overlay";
import { defaultEdge } from "../templates/templates";

export class GraphModel {
    vertices: Array<Vertex> = [];
    edges: Array<Edge> = [];
    overlays: Array<Overlay> = [];

    constructor(public readonly ctx: Context) {

    }

    public addVertex(type: string, position: Point): Vertex {
        const v = new Vertex(this.ctx, type);
        v.create();
        this.vertices.unshift(v);
        v.moveTo(position);
        return v;
    }

    public addEdge(from: number | Vertex, to: number | Vertex, type?: IEdgeType) {
        from = (typeof from === 'number') ? this.findVertex(from) : from;
        to = (typeof to === 'number') ? this.findVertex(to) : to;

        const e = new Edge(this.ctx, from, to, type || defaultEdge);
        e.create();
        this.edges.unshift(e);
        e.update();
        return e;
    }

    public findVertex(id: number) {
        return this.vertices.find(v => v.id === id);
    }

    public findEdge(id: number) {
        return this.edges.find(e => e.id === id);
    }

    public findOverlay(id: number) {
        return this.overlays.find(o => o.id === id);
    }

    public removeEdge(e: Edge | number) {
        this.edges.splice(this.edges.indexOf((typeof e === 'number') ? this.findEdge(e) : e), 1);
    }

    public removeVertex(v: Vertex | number) {
        this.vertices.splice(this.vertices.indexOf((typeof v === 'number') ? this.findVertex(v) : v), 1);
    }

    public removeOverlay(o: Overlay | number) {
        this.overlays.splice(this.overlays.indexOf((typeof o === 'number') ? this.findOverlay(o) : o), 1);
    }
}