import { Context } from "../ts-context";
import { Vertex } from "../graph/ts-vertex";
import { Edge } from "../graph/ts-edge";
import { Overlay } from "../graph/ts-overlay";
import { forEach } from 'lodash';

export type MouseEventType = 'click' | 'down' | 'up' | 'move' | 'enter' | 'leave';
export type MouseEventItemType = 'vertex' | 'edge' | 'overlay';


export class MouseHandler {

    callbacks: { [key: string]: { [key: string]: Function[] } } = {};

    triggers: { [key: string]: (evt: MouseEvent) => void } = {};

    constructor(ctx: Context) {
        const ev = ['click', 'down', 'up', 'move', 'enter', 'leave']
        const ty = ['vertex', 'edge', 'overlay']

        forEach(ev, e => {
            forEach(ty, t => {
                this.triggers[e + t] = () => this.fire(e as MouseEventType, t as MouseEventItemType);
            });
        });

    }

    listen(eventType: MouseEventType, item: MouseEventItemType, callback: Function) {
        (this.callbacks[eventType]) || (this.callbacks[eventType] = {});
        (this.callbacks[eventType][item]) || (this.callbacks[eventType][item] = []);
        this.callbacks[eventType][item].push(callback);
    }

    fire(eventType: MouseEventType, item: MouseEventItemType) {
        this.callbacks[eventType] && this.callbacks[eventType][item] && forEach(this.callbacks[eventType][item], i => i());
    }

    execTrigger(name: string, evt: MouseEvent) {
        this.triggers[name] && this.triggers[name](evt);
    }
}

export interface MouseEventData {
    component: Vertex & Edge & Overlay;
    id: string;
}