export class LumberProduct {
    id: string;
    lumberTypeId: string;
    length: number;
    isActive: boolean;
    quantity: number;
    includeInCalculations: boolean;

    constructor(id: string, lumberTypeId: string, length: number, isActive: boolean, quantity: number, includeInCalculations: boolean) {
        this.id = id;
        this.lumberTypeId = lumberTypeId;
        this.length = length;
        this.isActive = isActive;
        this.quantity = quantity;
        this.includeInCalculations = includeInCalculations;
    }

    clone(id: string, lumberTypeId: string, length: number, isActive: boolean, quantity: number, includeInCalculations: boolean) {
        return new LumberProduct(id, lumberTypeId, length, isActive, quantity, includeInCalculations);
    }
}
