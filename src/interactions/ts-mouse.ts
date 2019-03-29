import { Context } from "../ts-context";
import { Vertex } from "../graph/ts-vertex";
import { Edge } from "../graph/ts-edge";
import { Overlay } from "../graph/ts-overlay";
import { forEach } from 'lodash';

export type MouseEventType = 'click' | 'dblclick' | 'down' | 'up' | 'move' | 'enter' | 'leave';
export type MouseEventItemType = 'vertex' | 'edge' | 'overlay' | 'root';


export class MouseHandler {

    callbacks: { [key: string]: { [key: string]: Function[] } } = {};

    triggers: { [key: string]: (evt: MouseEventData) => void } = {};

    constructor(ctx: Context) {

    }

    listen(eventType: MouseEventType, item: MouseEventItemType, callback: Function) {
        (this.callbacks[eventType]) || (this.callbacks[eventType] = {});
        (this.callbacks[eventType][item]) || (this.callbacks[eventType][item] = []);
        this.callbacks[eventType][item].push(callback);
    }

    fire(eventType: MouseEventType, item: MouseEventItemType, data: MouseEventData) {
        this.callbacks[eventType] && this.callbacks[eventType][item] && forEach(this.callbacks[eventType][item], i => i());
    }
}

export interface MouseEventData {
    component: Vertex | Edge | Overlay;
    id: string;
    evt: MouseEvent
}