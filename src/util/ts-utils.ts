import { Point } from "./ts-point";
import { Line } from "./ts-lineUtils";


export class Utils {

    private static idCounter = 0;

    public static newId = (prefix?: string) => (prefix || 'id-') + (Utils.idCounter++);

    public static pointFromSVGRect(rect: SVGRect) {
        return new Point(
            (rect.width - rect.x) / 2,
            (rect.height - rect.y) / 2
        );
    }

    public static calcPointInRect(rect: SVGRect, percent: number): Point {
        let edge = Math.floor((percent * 4) % 4)
        if (percent === 0) {
            percent = 0.001;
        }
        percent = percent % 0.25;
        if (percent == 0) {
            edge++;
        }
        percent = percent * 4;
        let y = 0; let x = 0;

        if (edge == 0) {
            x = (rect.width * percent) + rect.x;
            y = rect.y
        } else if (edge === 2) {
            x = (rect.x + rect.width) - (rect.width * percent);
            y = rect.y + rect.height;
        }

        if (edge == 1) {
            y = (rect.height * percent) + rect.y;
            x = rect.x + rect.width
        } else if (edge === 3) {
            x = rect.x;
            y = (rect.height + rect.y) - (rect.height * percent);
        }

        return new Point(x, y);
    }

    public static rectCentre(box: SVGRect): Point {
        return new Point(box.x + (box.width / 2), box.y + (box.height / 2));
    }

    relativePosition(rect1: SVGRect, rect2: SVGRect) {
        const d1 = Line.fromPoints(new Point(rect1.x, rect1.y),
            new Point(rect1.x + rect1.width))
    }

    public static findAutoEdge(rect1: SVGRect, rect2: SVGRect): { p1: number, p2: number } {
        let p1 = 0;
        let p2 = 0;
        if (Utils.isLeftOf(rect1, rect2)) {
            p1 = 0.25;
            p2 = 0.75;
        } else if (Utils.isRightOf(rect1, rect2)) {
            p1 = .75;
            p2 = 0.25;
        } else if (Utils.isAboveOf(rect1, rect2)) {
            p1 = 0.5;
            p2 = 0;
        } else if (Utils.isBelowOf(rect1, rect2)) {
            p1 = 0;
            p2 = 0.5;
        }
        return {
            p1: p1 + 0.125,
            p2: p2 + 0.125
        };
    }

    public static calcCurvePoints(p1: Point, p2: Point, fromP: number, toP: number): Point[] {
        // TODO -
        throw new Error('Not implimented');
        return null;
    }

    public static calcPolyPoints(start: Point, end: Point, startP: number, endP: number, ): Point[] {
        const points: Point[] = [];
        points.push(start);
        points.push(...this.joinPointsWithLines(
            this.translatePointForPercent(start, startP, 10),
            this.translatePointForPercent(end, endP, 10)
        ));
        points.push(end);
        return points;
    }

    public static translatePointForPercent(point: Point, p: number, translate: number): Point {

        p = (p % 1) / .25;
        let x = 0, y = 0;
        if (p < 1) y = -translate;
        else if (p < 2) x = translate;
        else if (p < 3) y = translate;
        else x = -translate;
        return point.clone().moveBy(x, y);
    }

    public static joinPointsWithLines(p1: Point, p2: Point): Point[] {
        const points: Point[] = [];
        points.push(p1);
        if (p1.y < p2.y) {
            points.push(new Point(p2.x, p1.y));
        } else if (p1.y > p2.y) {
            points.push(new Point(p1.x, p2.y));
        }
        points.push(p2);
        return points;
    }

    public static markPoint(svg: SVGSVGElement, p: Point | Array<Point>) {
        if (Array.isArray(p)) {
            p.forEach(_p => this.markPoint(svg, _p));
        } else {
            const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            c.setAttributeNS(null, 'cx', p.x + '');
            c.setAttributeNS(null, 'cy', p.y + '');
            c.setAttributeNS(null, 'fill', 'red');
            c.setAttributeNS(null, 'r', '3');
            svg.appendChild(c);
        }
    }

    public static lerp(start: number, end: number, amount: number) {
        return (1 - amount) * start + amount * end;
    }
}