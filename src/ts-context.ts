import { TSVertexRegistry as VertexRegistry } from "./graph/ts-vertex-reg";
import { TemplateHandler } from "./util/ts-template";

export class Context {
    public vertexReg = new VertexRegistry(this);

    private edgeGroup: SVGGElement;
    private vertexGroup: SVGGElement;
    private overlay: SVGGElement;

    public templateHandler = new TemplateHandler();

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
    }

    public addEdgeElement(el: SVGElement) {
        this.edgeGroup.appendChild(el);
    }

    public addOverlay(el: SVGElement) {
        this.overlay.appendChild(el);
    }
}