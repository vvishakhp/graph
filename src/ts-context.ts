import { TSVertexRegistry as VertexRegistry } from "./graph/ts-vertex-reg";
import { TemplateHandler } from "./util/ts-template";
import { MouseHandler, MouseEventItemType } from "./interactions/ts-mouse";

export class Context {
    public vertexReg = new VertexRegistry(this);

    private edgeGroup: SVGGElement;
    private vertexGroup: SVGGElement;
    private overlay: SVGGElement;

    public templateHandler = new TemplateHandler();

    public mouseHandler = new MouseHandler(this);

    constructor(public svg: SVGSVGElement) {
        this.createGroups();
    }

    private createGroups() {
        this.edgeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        this.vertexGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        this.overlay = document.createElementNS('http://www.w3.org/2000/svg', 'g');

        this.svg.appendChild(this.edgeGroup);
        this.svg.appendChild(this.vertexGroup);
        this.svg.appendChild(this.overlay);


        this.edgeGroup.setAttributeNS(null, 'id', 'edgeGroup');
        this.vertexGroup.setAttributeNS(null, 'id', 'vertexGroup');
        this.overlay.setAttributeNS(null, 'id', 'overlay');
    }

    public addVertexElement(el: SVGElement) {
        this.vertexGroup.appendChild(el);
        this.registerMouseEvents('vertex', el);
    }

    public addEdgeElement(el: SVGElement) {
        this.edgeGroup.appendChild(el);
        this.registerMouseEvents('edge', el);
    }

    public addOverlay(el: SVGElement) {
        this.overlay.appendChild(el);
        this.registerMouseEvents('overlay', el);
    }

    private registerMouseEvents(itemType: MouseEventItemType, item: SVGElement) {

        item.onclick = this.mouseHandler.triggers['click' + itemType];
        item.onmousedown = this.mouseHandler.triggers['down' + itemType];
        item.onmouseup = this.mouseHandler.triggers['up' + itemType];
        item.onmousemove = this.mouseHandler.triggers['move' + itemType];
        item.onmouseenter = this.mouseHandler.triggers['enter' + itemType];
        item.onmouseleave = this.mouseHandler.triggers['leave' + itemType];
    }
}