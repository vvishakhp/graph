import { Point } from "./ts-point";

export class Rect extends Point {

    constructor(x: number = 0, y: number = 0, public h: number = 0, public w: number = 0) {
        super(x, y);
    }


    clone() {
        return new Rect(this.x, this.y, this.h, this.w);
    }
}