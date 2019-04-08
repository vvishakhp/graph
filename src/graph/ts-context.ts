import { TypeRegistry } from "../registry/ts-type-registry.ts";
import { TemplateExecutor, forEach, throttle } from "lodash";
import { IPathHelper, PolyLinePathHelper } from "../util/path/ts-poly-line";
import { StraightPathHelper } from "../util/path/ts-path";
import { CurvePathHelper } from "../util/path/ts-curve";
import { TemplateCompiler, defaultVertex, start, end, arrow_marker } from "../templates/templates";
import { Marker } from "../templates/ts-marker";

export type UiItemType = 'edge' | 'vertex' | 'overlay';


export class Context {
    public readonly vertexReg = new TypeRegistry<TemplateExecutor>();
    public readonly edgeReg = new TypeRegistry<() => IPathHelper>();

    public readonly svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    public readonly edgeGroup = this.createGroupElement('edge');
    public readonly vertexGroup = this.createGroupElement('vertex');
    public readonly overlayGroup = this.createGroupElement('overlay');

    public markers: Map<string, Marker> = new Map();

    public readonly templateCompiler = new TemplateCompiler(this);

    private height = 500;
    private width = 500;


    private updateSvgSize = throttle(() => {
        const b1 = this.vertexGroup.getBBox(), b2 = this.edgeGroup.getBBox();
        const x = Math.max(b1.width, b2.width, this.width);
        const y = Math.max(b1.height, b2.height, this.height);
        if (x !== this.width) {
            this.width = x + 500;
        }
        if (y !== this.height) {
            this.height = y + 500;
        }
        this.svg.style.width = this.width + 'px';
        this.svg.style.height = this.height + 'px';
    }, 500);


    constructor() {
        this.init();
    }

    public addUiItem(type: UiItemType, item: SVGElement) {
        if (type === 'edge') {
            this.edgeGroup.appendChild(item);
        } else if (type === 'vertex') {
            this.vertexGroup.appendChild(item);
        } else {
            this.overlayGroup.appendChild(item);
        }
        this.updateSvgSize();
    }

    private createGroupElement(name?: string): SVGGElement {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        this.svg.appendChild(g);
        name && g.setAttribute('id', name);
        return g;
    }

    public init() {

        this.markers.set('arrow', new Marker(this, arrow_marker));

        this.edgeReg.addType('straight', () => new StraightPathHelper());
        this.edgeReg.addType('polyline', () => new PolyLinePathHelper());
        this.edgeReg.addType('curve', () => new CurvePathHelper());

        this.vertexReg.addType('default', this.templateCompiler.compile(defaultVertex));
        this.vertexReg.addType('start', this.templateCompiler.compile(start));
        this.vertexReg.addType('end', this.templateCompiler.compile(end));


    }
}