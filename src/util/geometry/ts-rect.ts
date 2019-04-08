import { Point } from "./ts-point";

export enum Position {
    top, bottom, left, right, bottomleft, bottomright, topleft, topright
}

export class Rect extends Point {

    constructor(x: number = 0, y: number = 0, public h: number = 0, public w: number = 0) {
        super(x, y);
    }


    clone() {
        return new Rect(this.x, this.y, this.h, this.w);
    }

    copy(other: Rect) {
        this.x = other.x;
        this.y = other.y;
        this.h = other.h;
        this.w = other.w;
    }

    pointFromPercent(p: number) {
        p = (p % 100) / 25;
        const edge = Math.floor(p);
        let x = this.x - (this.w / 2), y = this.y - (this.h / 2);
        p = p - edge;
        // console.log(edge, p);
        switch (edge) {
            case 0:
                x += Math.floor(this.w * p);
                break;
            case 1:
                x += this.w;
                y += Math.floor(this.h * p);
                break;
            case 2:
                y += this.h;
                x += Math.floor(this.w * (1 - p));
                break;
            case 3:
                y += Math.floor(this.h * (1 - p));
                break;
        }
        console.log(x, y);
        return new Point(x, y);
    }

    findPositionOf(other: Rect): Position {
        return Position.bottom;
    }

    public get topLeftVertex(): Point {
        return this.pointFromPercent(0)
    }

    public get bottomLeftVertex(): Point {
        return this.pointFromPercent(75);
    }

    public get topRightVertex(): Point {
        return this.pointFromPercent(25);
    }

    public get bottomRightVertex(): Point {
        return this.pointFromPercent(50);
    }


    public  mark(svg: SVGSVGElement) {
        [
            this.topLeftVertex,
            this.bottomLeftVertex,
            this.topRightVertex,
            this.bottomRightVertex
        ].forEach(p => p.mark(svg));
    }
}