import { Point } from "./ts-point";

export class PathUtil {

    paths: string[] = [];
    radius: number;

    public constructor(start: Point) {
        this.paths.push('M' + start.toString());
    }

    public horizontal(n: number) {
        this.paths.push('h' + n);
        return this;
    }

    public vertical(n: number) {
        this.paths.push('v' + n);
        return this;
    }

    public lineTo(point: Point) {
        this.paths.push('L' + point.toString());
        return this;
    }

    public pop() {
        if (this.paths.length > 1) {
            this.paths.pop();
        }
        return this;
    }

    public setCornerRadius(radius: number) {
        throw new Error('Not implimented yet');
        // TODO - 
        this.radius = Math.abs(radius);
        return this;
    }

    public resetCornerRadius() {
        throw new Error('Not implimented yet');
        // TODO - 
        this.radius = 0;
        return this;
    }

    public getPath() {
        return this.paths.join(' ');
    }

}