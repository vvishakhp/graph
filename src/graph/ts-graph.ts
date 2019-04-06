export class Graph {

    private svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    constructor(private el: string | HTMLElement) {
        if (typeof el === 'string') {
            el = document.querySelector(el) as HTMLElement;
        }

        if (!el) {
            throw new Error('An html element is required to start drawing');
        }

        (this.el as HTMLElement).appendChild(this.svg);
    }

    public get SVG() {
        return this.svg;
    }

    public get model() {

    }
}