import { Context } from "../ts-context";

export class TemplateHandler {

    public inflateSVG(svgString: string): SVGElement {
        const domParser = new DOMParser();
        const dom = domParser.parseFromString(`${svgString}`, 'image/svg+xml');
        return (dom.documentElement as unknown as SVGElement);
    }
}
