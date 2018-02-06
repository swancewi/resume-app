export class Employee {
    id?: string;
    name?: string;
    certificationsShort?: string;
    certificationsLong?: string;
    title?: string;
    quote?: string;
    blurb?: string;
    education?: string;
    image?: string;

    public static fromJSON(json: any): Employee {
        const object = Object.create(Employee.prototype);
        Object.assign(object, json);
        return object;
    }
}
