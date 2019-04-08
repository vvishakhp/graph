import { Context } from "../graph/ts-context";
import { newId } from "../util/misc";
import { Rect } from "../util/geometry/ts-rect";

export type MarkerType = 'end' | 'start' | 'mid'

export class Marker {

    private readonly id = 'm-' + newId();

    constructor(private readonly ctx: Context, template: string) {
        const m = ctx.templateCompiler.parseString(template);
        m.setAttributeNS(null, 'id', this.id);
        this.getDefs().appendChild(m);
    }

    getDefs(): SVGDefsElement {
        let defs = this.ctx.svg.getElementsByTagName('defs')[0] as SVGDefsElement;
        if (!defs) {
            defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            this.ctx.svg.appendChild(defs);
        }
        return defs;
    }

    applyTo(el: SVGGraphicsElement, type: MarkerType) {
        el.setAttributeNS(null, 'marker-' + type, 'url(#' + this.id + ')')
    }
}