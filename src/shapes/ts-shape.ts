export class TSShape {

    private el: SVGGElement;

    private _x: number;
    public get x() {
        return this._x;
    }
    public set x(v: number) {
        this._x = v;
        this.el.setAttributeNS(null, 'x', this._x.toString());
    }


    private _y: number;
    public get y(): number {
        return this._y;
    }
    public set y(v: number) {
        this._y = v;
        this.el.setAttributeNS(null, 'y', this._y.toString());
    }


    public constructor(el: SVGElement) {
        this.el = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        this.el.appendChild(el);
    }

    public appendTo(el: SVGElement) {
        el.appendChild(this.el);
        return this;
    }
}