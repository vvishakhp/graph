import { Context } from "../ts-context";

export class EdgeRegisry {

    readonly _reg = new Map<string, string>();

    public constructor(private ctx: Context) {

    }

    public register(type: string, template: string) {
        this._reg.set(type, template);
    }

    public get(type: string): SVGElement {
        const template = this._reg.get(type);
        if (template) {
            return this.ctx.templateHandler.inflateSVG(template);
        } else {
            throw new Error('No template regsisted for edge with name : ' + type);
        }
    }
}