import { Context } from "../ts-context";
import { defaultVertex } from "../templates/templates";
import { TemplateExecutor } from "lodash";
import { TemplateHandler } from "../util/ts-template";

export class TSVertexRegistry {

    readonly _reg = new Map<string, TemplateExecutor>();
    private templateHandler = new TemplateHandler();
    constructor(private ctx: Context) {
        this._reg.set('default', this.templateHandler.compile(defaultVertex));
    }

    register(type: string, template: string) {
        this._reg.set(type, this.templateHandler.compile(template));
    }

    get(type: string, data: any): SVGElement {
        const template = this._reg.get(type);
        if (template) {
            return this.ctx.templateHandler.inflateSVG(template(data));
        } else {
            throw new Error('No template registered for vertex with name : ' + type);
        }
    }
}