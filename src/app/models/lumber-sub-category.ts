export class LumberSubCategory {
    id: string;
    lumberCategoryId: string;
    name: string;
    width: number;
    thickness: number;
    bundleSize: number;
    weight: number;
    sortOrder: number;

    constructor(id: string, lumberCategoryId: string, name: string, width: number, thickness: number, bundleSize: number, weight: number, sortOrder: number) {
        this.id = id;
        this.lumberCategoryId = lumberCategoryId;
        this.name = name;
        this.width = width;
        this.thickness = thickness;
        this.bundleSize = bundleSize;
        this.weight = weight;
        this.sortOrder = sortOrder;
    }
}
