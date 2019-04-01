import { GraphModel } from "./graph/ts-graph";
import { Context } from "./ts-context";
import { PathUtil } from "./util/ts-path";
import { Point } from "./util/ts-point";
export class GraphApp {

    private element: HTMLElement;
    private svg: SVGSVGElement;
    public graphContext: Context;
    public graph: GraphModel;

    constructor(element: HTMLElement | string) {
        if (typeof element === 'string') {
            this.element = document.querySelector(element);
        } else {
            this.element = element;
        }

        if (!element) {
            throw new Error('Could not find the DOM Element');
        }

        this.init();
    }

    private init() {
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.element.appendChild(this.svg);
        this.graphContext = new Context(this.svg);
        this.graph = new GraphModel(this.graphContext);
        test(this.graph, this.graphContext);
    }
}

var test = async function (graph: GraphModel, ctx: Context) {


    let v1 = graph.addVertex('default', 150, 150);
    let v2 = graph.addVertex('default', 300, 400);

    const _e = graph.addEdge(v1, v2);
    // _e.setEdgeType('polyline');

}

window['tsGraph'] = GraphApp;