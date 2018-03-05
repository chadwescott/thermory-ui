import { Injectable } from '@angular/core';
import { LumberCategory } from '../models/lumber-category';

@Injectable()
export class LumberCategoryService {
  lumberCategories: LumberCategory[] = [
     new LumberCategory("1", "1 x 4", 1),
     new LumberCategory("2", "2 x 4", 2)
  ];

  constructor() { }

  save(lumberCategory: LumberCategory) {
    if (lumberCategory.id === '') {
      lumberCategory.id = (this.lumberCategories.length + 1).toString();
      this.lumberCategories.push(lumberCategory);
    } else {
      this.updateCategory(lumberCategory);
    }
  }

  updateCategory(lumberCategory: LumberCategory) {
    let i = this.lumberCategories.findIndex(c => c.id == lumberCategory.id);
    if (i >= 0)
      this.lumberCategories[i] = lumberCategory;
  }
}
