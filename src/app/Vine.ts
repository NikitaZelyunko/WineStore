export class Vine {
    id: number;
    title: string;
    price: number;
    type: string;
    declaration: string;

    constructor(
        id: number, title: string, price: number,
        type: string, declaration: string
    ) {
        this.id  = id;
        this.title = title;
        this.price = price;
        this.type = type;
        this.declaration = declaration;
    }

    static fromObject(object: Object) {
        console.log(object);
        const fields: Array<string> = ['id', 'title', 'price', 'type', 'declaration'];
        const args = fields.map(field => object[field] !== undefined ? object[field] : null);
        return Vine.apply(null, args);
    }
}
