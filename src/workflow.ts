import { Graph } from "./graph/ts-graph";
import { Point } from "./util/geometry/ts-point";
import { delay } from "./util/misc";
import { Rect } from "./util/geometry/ts-rect";

interface Sequence {
    items: Array<Rect | Sequence>;
}

export class Workflow {

    public xPadding = 80;
    public yPadding = 80;

    private sequence: Sequence;

    private graph: Graph;

    public constructor(private el: HTMLElement) {
        this.init();
    }

    private async init() {
        this.graph = new Graph(this.el);

        const startPoint = new Point(100, 100);
        const endPoint = startPoint.clone().moveBy(0, 100);

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