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

var test = async function (graph: GraphModel, ctx: Context, x: number = 0, y: number = 0) {

    if (y > 100) return;

    let v1 = graph.addVertex('default', x * 200, 200);
    let v2 = graph.addVertex('default', x * 500, 400);


    var e = graph.addEdge(v1, v2); e.setStart(0.3);


    v2 = graph.addVertex('default', x * 400, 200);
    graph.addEdge(v1, v2);

    v2 = graph.addVertex('default', 0, 200);
    graph.addEdge(v1, v2);


    v2 = graph.addVertex('default', x * 200, 400);
    graph.addEdge(v1, v2);
}

window['tsGraph'] = GraphApp;