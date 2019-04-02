import { Point } from "./ts-point";

export class Line {
    private m: number;
    private c: number;

    private constructor() { }

    public isPointOnLine(p1: Point): boolean {
        return (p1.y === (this.m * p1.x) + this.c);
    }

    public static fromPoints(p1: Point, p2: Point) {
        const l = new Line();
        l.m = ((p1.x - p2.x) / (p1.y / p2.y));
        l.c = (l.m * p1.x) - p1.y;
        return l;
    }

    public isPointAbove(p: Point) {
        return p.y > this.m * p.x + this.c;
    }

    public isPointBelow(p: Point) {
        return p.y > this.m * p.x + this.c;
    }
}