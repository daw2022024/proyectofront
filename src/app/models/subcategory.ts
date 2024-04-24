import { Category } from "./category";
import { Product } from "./product";

export class Subcategory {
    id:number;
    name:string;
    category:Category;
    products:Product[];

    constructor(id:number, name:string, category:Category, products:Product[]){
        this.id = id;
        this.name = name;
        this.category = category;
        this.products = products;
    }
    public getId():number{
        return this.id;
    }
    public getName():string{
        return this.name;
    }
    public getCategory():Category{
        return this.category;
    }
    public getProducts():Product[]{
        return this.products;
    }
    public setName(name:string){
        this.name=name;
    }
    public setCategory(category:Category){
        this.category=category;
    }
    public setProducts(products:Product[]){
        this.products=products;
    }

}
