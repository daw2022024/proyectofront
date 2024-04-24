import { Image } from "./image";
import { Price } from "./price";
import { Subcategory } from "./subcategory";

export class Product {
    id:number;
    name:string;
    description:string;
    subcategories:Subcategory[];
    prices:Price[];
    image:Image;
    constructor(id:number, name:string, description:string, subcategories:Subcategory[],prices:Price[],image:Image){
        this.id=id;
        this.name=name;
        this.description=description;
        this.subcategories=subcategories;
        this.prices=prices;
        this.image=image;
    }
    public getId(): number{
        return this.id;
    }
    public getName(): string{
        return this.name;
    }
    public getDescription(): string{
        return this.description;
    }
    public getSubcategories(): Subcategory[]{
        return this.subcategories;
    }
    public getPrices(): Price[]{
        return this.prices;
    }
    public getImage(): Image{
        return this.image;
    }
    public setName(name:string){
        this.name=name;
    }
    public setDescription(description:string){
        this.description=description;
    }
    public setSubcategories(subcategories:Subcategory[]){
        this.subcategories=subcategories;
    }
    public setPrices(prices:Price[]){
        this.prices=prices;
    }
    public setImage(image:Image){
        this.image=image;
    }

}
