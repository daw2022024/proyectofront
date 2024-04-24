import { Market } from "./market";
import { Product } from "./product";

export class Price {
    id: number;
    product: Product;
    market: Market;
    value: number;
    constructor(id: number, product: Product, market: Market, value: number) {
        this.id = id;
        this.product = product;
        this.market = market;
        this.value = value;
    }

    public getId(): number {
        return this.id;
    }
    public getProduct(): Product {
        return this.product;
    }
    public getMarket(): Market {
        return this.market;
    }
    public getValue(): number {
        return this.value;
    }
    public setProduct(product: Product) {
        this.product = product;
    }
    public setMarket(market: Market) {
        this.market = market;
    }
    public setValue(value: number) {
        this.value = value;
    }
}
