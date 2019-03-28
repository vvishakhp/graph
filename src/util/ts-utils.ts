import { Point } from "./ts-point";


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

    public static isAboveOf(rect1: SVGRect, rect2: SVGRect): boolean {
        return this.rectCentre(rect1).y < rect2.y;

    }

    public static isBelowOf(rect1: SVGRect, rect2: SVGRect): boolean {
        return this.rectCentre(rect1).y > (rect2.y + rect2.height);
    }

    public static isLeftOf(rect1: SVGRect, rect2: SVGRect): boolean {
        return this.rectCentre(rect1).x < (rect2.x);
    }

    public static isRightOf(rect1: SVGRect, rect2: SVGRect): boolean {
        return this.rectCentre(rect1).x > (rect2.x + rect2.width);
    }

    public static findAutoEdge(rect1: SVGRect, rect2: SVGRect): { p1: number, p2: number } {
        let p1 = 0;
        let p2 = 0;
        console.log(Utils.rectCentre(rect1));
        if (Utils.isAboveOf(rect1, rect2)) {
            p1 = 0.5;
            p2 = 0;
        } else if (Utils.isBelowOf(rect1, rect2)) {
            p1 = 0;
            p2 = 0.5;
        } else if (Utils.isLeftOf(rect1, rect2)) {
            p1 = 0.25;
            p2 = 0.75;
        } else if (Utils.isRightOf(rect1, rect2)) {
            p1 = .75;
            p2 = 0.25;
        }
        return {
            p1: p1 + 0.125,
            p2: p2 + 0.125
        };
    }
}