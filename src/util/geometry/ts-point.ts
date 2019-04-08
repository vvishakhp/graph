export class Point {
    public constructor(public x: number = 0, public y: number = 0) {

    }

    clone() {
        return new Point(this.x, this.y);
    }

    public toString(sep: string = ' ') {
        return `${this.x}${sep}${this.y}`;
    }

    public round(n: number) {
        this.x = this._round(this.x, n);
        this.y = this._round(this.y, n);
    }

    private _round(n: number, denominator: number): number {
        const t = Math.floor((n + denominator - 1) / denominator)
        return t * denominator;
    }

    public moveBy(x: number, y: number) {
        this.x += x;
        this.y += y;
        return this;
    }

    public  mark(svg: SVGSVGElement) {
        const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        c.setAttributeNS(null, 'cx', this.x + '');
        c.setAttributeNS(null, 'cy', this.y + '');
        c.setAttributeNS(null, 'fill', 'red');
        c.setAttributeNS(null, 'r', '3');
        svg.appendChild(c);
    }

    public transpose() {
        return new Point(this.y, this.x);
    }
}
