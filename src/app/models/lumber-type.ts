import { LumberProduct } from "./lumber-product";

export class LumberType {
    id: string;
    lumberSubCategoryId: string;
    name: string;
    sortOrder: number;
    lumberProducts: LumberProduct[];

    constructor(id: string, lumberSubCategoryId: string, name: string, sortOrder: number, lumberProducts: LumberProduct[] = null) {
        this.id = id;
        this.lumberSubCategoryId = lumberSubCategoryId;
        this.name = name;
        this.sortOrder = sortOrder;
        this.lumberProducts = lumberProducts;
    }

    clone(id: string, lumberSubCategoryId: string, name: string, sortOrder: number, lumberProducts: LumberProduct[] = null) {
        return new LumberType(id, lumberSubCategoryId, name, sortOrder, lumberProducts);
    }
}
