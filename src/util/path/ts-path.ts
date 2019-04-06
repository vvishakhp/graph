import { Point } from "../geometry/ts-point";

export interface IPathHelper {
    getPathData(): string;
}

export class StraightPathHelper implements IPathHelper {

    getPathData(): string {
        return `M${this.start.toString()} L${this.end.toString()}`;
    }

    public start: Point;
    public end: Point;


}