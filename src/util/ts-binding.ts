import { forEach } from 'lodash';

export class Binding {

    private callbacks: Function[];

    props = new Map<string, any>();

    public static newBinding(obj): typeof Proxy {
        const b = new Binding();
        Object.keys(obj).forEach(key => {
            b.props.set(key, obj[key]);
        })
        return new Proxy({}, b);
    }

    private constructor() {

    }

    public get(obj: any, key: string) {
        return this.props.get(key);
    }

    public set(obj: any, key: any, value: any, receiver: any): boolean {
        this.props.set(key, value);
        setTimeout(() => forEach(this.callbacks, c => c(key, this.props.get(key))), 0);
        return true;
    }

    public subscribe(callbak: (key: string, value: any) => void) {
        this.callbacks.push(callbak);
    }
}