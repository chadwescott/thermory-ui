import { LumberSubCategory } from "./lumber-sub-category";

export class LumberCategory {
    id: string;
    name: string;
    sortOrder: number;
    lumberSubCategories: LumberSubCategory[];

    constructor(id: string, name: string, sortOrder: number, lumberSubCategories: LumberSubCategory[] = null) {
        this.id = id;
        this.name = name;
        this.sortOrder = sortOrder;
        this.lumberSubCategories = lumberSubCategories;
    }
}
