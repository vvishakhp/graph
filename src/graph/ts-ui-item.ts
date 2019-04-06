import { Point } from "../util/geometry/ts-point";
import { Context, UiItemType } from "./ts-context";


export abstract class UiItem {

    public el: SVGElement;

    public constructor(private ctx: Context, private type: UiItemType) { }

    abstract create(): Promise<any>;
    abstract updateStyle(): Promise<any>;
    abstract updateAttr(): Promise<any>;

    public async addToView() {
        this.ctx.addUiItem(this.type, this.el);
    }
}