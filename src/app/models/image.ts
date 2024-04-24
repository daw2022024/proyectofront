import { Product } from "./product";

export class Image {
    id: number;
    src: string;
    product: Product;

    constructor(id: number, src: string, product: Product) {
        this.id = id;
        this.src = src;
        this.product = product;
    }

    public getId(): number {
        return this.id;
    }

    public getSrc(): string {
        return this.src;
    }

    public setSrc(src: string) {
        this.src = src;
    }

    public getProduct(): Product {
        return this.product;
    }

    public setProduct(product: Product) {
        this.product = product;
    }

}
