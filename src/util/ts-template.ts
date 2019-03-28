import { Context } from "../ts-context";
import { template, TemplateExecutor } from 'lodash';
import { Binding } from "./ts-binding";

export type test = 't' | 'y';

export class TemplateHandler {

    public inflateSVG(svgString: string): SVGElement {
        svgString = `<g xmlns="http://www.w3.org/2000/svg">${svgString}</g>`
        const domParser = new DOMParser();
        const dom = domParser.parseFromString(`${svgString}`, 'image/svg+xml');
        return (dom.documentElement as unknown as SVGElement);
    }
    
    public compile(templateString: string): TemplateExecutor {
        return template(templateString);
    }
}