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

    toJSON(): Object {
        return {
            id: this.id,
            title: this.title,
            price: this.price,
            type: this.type,
            declaration: this.declaration
        };
    }
}
