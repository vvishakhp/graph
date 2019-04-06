import { Point } from "../geometry/ts-point";
import { forEach } from 'lodash';

export interface IPathHelper {
    getPathData(): string;
}


export class PolyLinePathHelper implements IPathHelper {

    points: Array<Point> = [];
    public pushPoint(p: Point) {
        if (this.points.length !== 0) {
            const lastP = this.points[this.points.length - 1]
            if (p.x > lastP.x) {
                this.points.push(new Point(p.x, lastP.y));
            } else {
                this.points.push(new Point(lastP.x, p.y));
            }
        }
        this.points.push(p);
    }

    public popPoint(): Point {
        return this.points.pop();
    }

    public getPathData() {
        return '';
    }

    public mark(svg: SVGSVGElement) {
        this.points.forEach(p => p.mark(svg));
    }
}