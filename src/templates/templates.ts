import { Context } from "../graph/ts-context";
import { TemplateExecutor } from "lodash";
import { template } from 'lodash';
export class TemplateCompiler {
    public constructor(ctx: Context) {

    }

    public compile(_template: string): TemplateExecutor {
        return template(_template);
    }

    public parseTemplate(templateExecutor: TemplateExecutor, data: any) {
        return new DOMParser().parseFromString(templateExecutor(data), 'image/svg+xml').documentElement;
    }
}


export const defaultVertex =
    `<g><rect height="60" width="120" stroke="blue" stroke-width="1" fill="none"></rect>
    <text fill="black" x="60" y="30" text-anchor="middle"><tspan></tspan></text></g>`;

export const start = `<circle rx="30" ry="30" fill="green"></circle>`;

export const end = `<circle rx="30" ry="30" fill="red"></circle>`;