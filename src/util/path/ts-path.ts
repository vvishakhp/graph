import { Point } from "../geometry/ts-point";
import { Direction } from "./ts-curve";
import { start } from "../../templates/templates";

export abstract class PathHelper {

    protected startPoint: Point;
    protected endPoint: Point;

    protected startDirection: Direction;
    protected endDirection: Direction;

    abstract getPathData(): string;

    setStart(point: Point) {
        this.startPoint = point;
    }

    setEnd(point: Point) {
        this.endPoint = point;
    }

    setStartDirection(direction: Direction) {
        this.startDirection = direction;
        this.endDirection = direction;
    }

    setEndDirection(direction: Direction) {
        this.endDirection = direction;
    }
}

export class StraightPathHelper extends PathHelper {
    getPathData(): string {
        return `M${this.startPoint.toString()} L${this.endPoint.toString()}z`;
    }
}