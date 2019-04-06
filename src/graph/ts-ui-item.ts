import { Point } from "../util/geometry/ts-point";

export abstract class UiItem {

    public el: SVGElement;

    public constructor() { }

    abstract create(): Promise<any>;
    abstract updateStyle(): Promise<any>;
    abstract updateAttr(): Promise<any>;
}