export class Point {
    public constructor(public x: number = 0, public y: number = 0) {

    }

    clone() {
        return new Point(this.x, this.y);
    }

    public toString() {
        return `${this.x} ${this.y}`;
    }
}