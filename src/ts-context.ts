import { TSVertexRegistry as VertexRegistry } from "./graph/ts-vertex-reg";
import { TemplateHandler } from "./util/ts-template";
import { MouseHandler, MouseEventItemType, MouseEventType } from "./interactions/ts-mouse";
import { GraphModel } from "./graph/ts-graph";

export class Context {

    height: number = 100;
    width: number = 100;

    public vertexReg = new VertexRegistry(this);

    private edgeGroup: SVGGElement;
    private vertexGroup: SVGGElement;
    private overlay: SVGGElement;

    public templateHandler = new TemplateHandler();

    public mouseHandler = new MouseHandler(this);

    private graph: GraphModel;

    constructor(public svg: SVGSVGElement) {
        this.createGroups();
    }

    public setGraphModel(graph: GraphModel) {
        this.graph = graph;
    }

    private createGroups() {

        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');

        this.edgeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        this.vertexGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        this.overlay = document.createElementNS('http://www.w3.org/2000/svg', 'g');

        g.appendChild(this.edgeGroup);
        g.appendChild(this.vertexGroup);
        g.appendChild(this.overlay);

        this.svg.appendChild(g);

        g.setAttributeNS(null, 'transform', 'translate(10 10)');

        this.edgeGroup.setAttributeNS(null, 'id', 'edgeGroup');
        this.vertexGroup.setAttributeNS(null, 'id', 'vertexGroup');
        this.overlay.setAttributeNS(null, 'id', 'overlay');
    }

    public addVertexElement(el: SVGElement) {
        this.vertexGroup.appendChild(el);
        this.registerMouseEvents('vertex', el);
        this.updateSvgSize();
    }

    public addEdgeElement(el: SVGElement) {
        this.edgeGroup.appendChild(el);
        this.registerMouseEvents('edge', el);
        this.updateSvgSize();
    }

    public addOverlay(el: SVGElement) {
        this.overlay.appendChild(el);
        this.registerMouseEvents('overlay', el);
        // this.updateSvgSize();
    }

    private registerMouseEvents(itemType: MouseEventItemType, item: SVGElement) {
        const id = item.getAttribute('data-id');

        item.onclick = (evt: MouseEvent) => this.handleEvent(id, itemType, 'click', evt);
        item.onmousedown = (evt: MouseEvent) => this.handleEvent(id, itemType, 'down', evt);
        item.onmouseup = (evt: MouseEvent) => this.handleEvent(id, itemType, 'up', evt);
        item.onmousemove = (evt: MouseEvent) => this.handleEvent(id, itemType, 'move', evt);
        item.onmouseenter = (evt: MouseEvent) => this.handleEvent(id, itemType, 'enter', evt);
        item.onmouseleave = (evt: MouseEvent) => this.handleEvent(id, itemType, 'leave', evt);
        item.ondblclick = (evt: MouseEvent) => this.handleEvent(id, itemType, 'dblclick', evt);
    }

    private handleEvent(id: string, type: MouseEventItemType, evtType: MouseEventType, evt: MouseEvent) {
        this.mouseHandler.fire(evtType, type, { component: this.graph.findItem(id), evt: evt, id: id });
    }

    private async updateSvgSize() {
        const b1 = this.vertexGroup.getBBox(), b2 = this.edgeGroup.getBBox();
        const x = Math.max(b1.x + b1.width, b2.x + b2.width, this.width);
        const y = Math.max(b1.y + b1.height, b2.y + b2.height, this.height);
        (x !== this.width) && ((this.width = x + 100)) || (this.svg.style.width = this.width + 'px');
        (y !== this.height) && ((this.height = y + 100)) || (this.svg.style.height = this.height + 'px');
    }

}