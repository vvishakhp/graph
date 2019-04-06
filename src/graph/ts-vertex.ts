import { UiItem } from "./ts-ui-item";
import { Context } from "./ts-context";


export class Vertex extends UiItem {

    constructor(ctx: Context, private templateType: string) {
        super(ctx, 'vertex');
    }

    async create() {
        this.el = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    }

    async updateStyle() {

    }

    async updateAttr() {

    }
}
