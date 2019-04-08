import { Graph } from "./graph/ts-graph";
import { Point } from "./util/geometry/ts-point";
import { delay } from "./util/misc";

export class Workflow {

    private graph: Graph;

    public constructor(private el: HTMLElement) {
        this.init();
    }

    private async init() {
        this.graph = new Graph(this.el);

        const startPoint = new Point(100, 100);
        const endPoint = new Point(100, 300);

        // Addvertices
        const vstart = this.graph.model.addVertex('start', startPoint);
        const vend = this.graph.model.addVertex('end', endPoint);

        // Update all vertices at once
        this.graph.updateAll();

        // Add edges
        const e = this.graph.model.addEdge(vstart, vend);

        await delay(500);
        // update all items at once
        this.graph.updateAll();
    }
}