import { TypeRegistry } from "../registry/ts-type-registry.ts";
import { TemplateExecutor } from "lodash";
import { IPathHelper, PolyLinePathHelper } from "../util/path/ts-poly-line";
import { StraightPathHelper } from "../util/path/ts-path";
import { CurvePathHelper } from "../util/path/ts-curve";
import { TemplateCompiler } from "../templates/templates";

export type UiItemType = 'edge' | 'vertex' | 'overlay';


export class Context {
    public readonly vertexReg = new TypeRegistry<TemplateExecutor>();
    public readonly edgeReg = new TypeRegistry<() => IPathHelper>();

    public readonly svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    public readonly edgeGroup = Context.createGroupElement();
    public readonly vertexGroup = Context.createGroupElement();
    public readonly overlayGroup = Context.createGroupElement();


    public readonly templateCompiler = new TemplateCompiler(this);


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
    }

    private static createGroupElement(): SVGGElement {
        return document.createElementNS('http://www.w3.org/2000/svg', 'g');
    }

    public init() {
        this.edgeReg.addType('straight', () => new StraightPathHelper());
        this.edgeReg.addType('polyline', () => new PolyLinePathHelper());
        this.edgeReg.addType('curve', () => new CurvePathHelper());

        this.vertexReg.addType('default', this.templateCompiler.compile())
    }
}