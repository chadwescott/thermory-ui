import { LumberType } from "./lumber-type";

export class LumberSubCategory {
    id: string;
    lumberCategoryId: string;
    name: string;
    width: number;
    thickness: number;
    bundleSize: number;
    weight: number;
    sortOrder: number;
    lumberTypes: LumberType[];

    constructor(id: string, lumberCategoryId: string, name: string, width: number, thickness: number,
        bundleSize: number, weight: number, sortOrder: number, lumberTypes: LumberType[] = null) {
            this.id = id;
            this.lumberCategoryId = lumberCategoryId;
            this.name = name;
            this.width = width;
            this.thickness = thickness;
            this.bundleSize = bundleSize;
            this.weight = weight;
            this.sortOrder = sortOrder;
    }

    clone() {
        return new LumberSubCategory(this.id, this.lumberCategoryId, this.name, this.width, this.thickness, this.bundleSize, this.weight, this.sortOrder);
    }
}
