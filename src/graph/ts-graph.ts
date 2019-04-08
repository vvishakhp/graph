import { Context } from "./ts-context";
import { GraphModel } from "./ts-graph-model";
import { forEach } from 'lodash';
import { UiItem } from "./ts-ui-item";

export class Graph {

    public readonly ctx = new Context();

    public readonly model = new GraphModel(this.ctx);

    constructor(private el: string | HTMLElement) {
        if (typeof el === 'string') {
            el = document.querySelector(el) as HTMLElement;
        }

        if (!el) {
            throw new Error('An html element is required to start drawing');
        }

        (this.el as HTMLElement).appendChild(this.ctx.svg);
    }

    public get SVG() {
        return this.ctx.svg;
    }

    public updateAll() {
        forEach([this.model.vertices, this.model.edges, this.model.overlays], (arr: UiItem[]) => forEach(arr, i => {
            i.update();
        }));
    }
}