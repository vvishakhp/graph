import { GraphModel } from "./graph/ts-graph";
import { Context } from "./ts-context";
import { Utils } from "./util/ts-utils";
import { Binding } from "./util/ts-binding";
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

var test = function (graph: GraphModel, ctx: Context) {
    let v1 = graph.addVertex('default', 200, 200);
    let v2 = graph.addVertex('default', 200, 0);
    graph.addEdge(v1, v2);


    v2 = graph.addVertex('default', 400, 200);
    graph.addEdge(v1, v2);

    v2 = graph.addVertex('default', 0, 200);
    graph.addEdge(v1, v2);


    v2 = graph.addVertex('default', 200, 400);
    graph.addEdge(v1, v2);
}

window['tsGraph'] = GraphApp;