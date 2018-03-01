export class LumberCategory {
    id: string;
    name: string;
    sortOrder: number;

    constructor(id: string, name: string, sortOrder: number) {
        this.id = id;
        this.name = name;
        this.sortOrder = sortOrder;
    }
}
