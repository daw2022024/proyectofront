import { Subcategory } from "./subcategory";

export class Category {
    id: number;
    name: string;
    subcategories: Subcategory[];
    constructor(id: number, name: string, subcategories: Subcategory[]) {
        this.id = id;
        this.name = name;
        this.subcategories = subcategories;

    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {

        return this.name;
    }
    public getSubcategories(): Subcategory[] {
        return this.subcategories;
    }
    
    public setName(name: string) {

        this.name = name;
    }
    public setSubcategories(subcategories: Subcategory[]) {
        this.subcategories = subcategories;
    }
}
