import { Point } from "../geometry/ts-point";
import { IPathHelper } from "./ts-poly-line";

export enum Direction {
    HORIZONTAL, VERTICAL
}

export class CurvePathHelper implements IPathHelper {

    p1: Point;
    p2: Point;

    public start: Point;
    public end: Point;

    public startDir: Direction;
    public endDir: Direction;

    public constructor() {

    }


    private calcPoints() {

    }

    public setStart(p: Point) {
        this.start = p;
    }

    public setEnd(p: Point) {
        this.end = p;
    }

    getPathData(): string {
        this.calcPoints();
        return '';
    }
}