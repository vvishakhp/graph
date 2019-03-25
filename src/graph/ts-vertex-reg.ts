import { Context } from "../ts-context";
import { defaultVertex } from "../templates/templates";

export class TSVertexRegistry {

    readonly _reg = new Map<string, string>();

    constructor(private ctx: Context) {
        this._reg.set('default', defaultVertex);
    }

    register(type: string, template: string) {
        this._reg.set(type, template);
    }

    get(type: string): SVGElement {
        const template = this._reg.get(type);
        if (template) {
            return this.ctx.templateHandler.inflateSVG(template);
        } else {
            throw new Error('No template registered for vertex with name : ' + type);
        }
    }
}