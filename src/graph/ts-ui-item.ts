import { Context, UiItemType } from "./ts-context";
import { newId } from "../util/misc";
import { throttle } from 'lodash';

export abstract class UiItem {

    public el: SVGGraphicsElement;

    public readonly id = newId();

    public constructor(protected readonly ctx: Context, private type: UiItemType) { }

    abstract create();
    abstract updateStyle();
    abstract updateAttr();

    public addToView() {
        this.el.setAttribute('data-id', this.id.toString());
        this.ctx.addUiItem(this.type, this.el);
    }

    public update = throttle(() => {
        this.updateAttr();
        this.updateStyle();
    }, 1000, { trailing: false, leading: true });
}