export class TypeRegistry<T> {

    private regMap = new Map<string, T>();

    public getType(type: string): T {
        return this.regMap.get(type);
    }

    public addType(key: string, item: T) {
        this.regMap.set(key, item);
    }
};