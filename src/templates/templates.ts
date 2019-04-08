import { Context } from "../graph/ts-context";
import { TemplateExecutor } from "lodash";
import { template } from 'lodash';
import { IEdgeType } from "../graph/ts-edge";
import { StraightPathHelper } from "../util/path/ts-path";
export class TemplateCompiler {
    public constructor(ctx: Context) {

    }

    public compile(_template: string): TemplateExecutor {
        return template(`<g xmlns="http://www.w3.org/2000/svg">${_template}</g>`);
    }

    public parseTemplate(templateExecutor: TemplateExecutor, data: any): SVGElement {
        return this.parseString(templateExecutor(data));
    }

    public parseString(str: string) {
        return new DOMParser().parseFromString(str, 'image/svg+xml').documentElement as unknown as SVGElement;
    }
}


export const defaultVertex =
    `<rect height="60" width="120" fill="#43c7fa" x="-60" y="-30" rx="5" ry="5"></rect>
    <text fill="#fefffe" text-anchor="middle"><tspan>Test</tspan></text>`;

export const start = `<circle r="10" fill="green" />`;

export const end = `<circle r="10" fill="red" />`;

export const arrow_marker = `<marker id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"
refX="1" refY="5" 
markerUnits="strokeWidth"
markerWidth="5" markerHeight="5"
orient="auto">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#9294a1"/>
</marker>`;


export const defaultEdge: IEdgeType = {
    pathHelper: () => new StraightPathHelper(),
    endMarker: 'arrow',
    attributes: {
        'fill' : 'none',
        'stroke':'#9294a1',
    }
}