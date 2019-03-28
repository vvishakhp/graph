export class Point {
    public constructor(public x: number = 0, public y: number = 0) {

    }

    clone() {
        return new Point(this.x, this.y);
    }

    public toString() {
        return `${this.x} ${this.y}`;
    }

    public round(n: number) {
        this.x = this._round(this.x, n);
        this.y = this._round(this.y, n);
    }

    private _round(n: number, denominator: number): number {
        const t = Math.floor((n + denominator - 1) / denominator)
        return t * denominator;
    }
}
