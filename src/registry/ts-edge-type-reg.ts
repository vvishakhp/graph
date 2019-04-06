import { EdgeType } from "../graph/ts-edge";
import { CurvePathHelper } from "../util/path/ts-curve";
import { StraightPathHelper, IPathHelper } from "../util/path/ts-path";

export class EdgeTypeRegistry {

    private regMap = new Map<EdgeType, IPathHelper>();

    public getPathUtils(type: EdgeType): IPathHelper {
        return this.regMap.get(type);
    }
};