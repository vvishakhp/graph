

export class Utils {

    private static idCounter = 0;

    public static newId = (prefix?: string) => (prefix || 'id-') + (Utils.idCounter++);
    
}