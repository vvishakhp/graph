import { GraphModel } from "./graph/ts-graph";
import { Context } from "./ts-context";
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
        this.graph.addVertex();
    }
}

window['tsGraph'] = GraphApp;
