import { Injectable } from '@angular/core';
import { LumberSubCategory } from '../models/lumber-sub-category';

@Injectable()
export class LumberSubCategoryService {
  lumberSubCategories: LumberSubCategory[];
  lumberSubCategory: LumberSubCategory;

  constructor() { }

  loadSubCategoriesByCategoryId(id: string) {
    this.lumberSubCategories = [
      new LumberSubCategory('1', id, '1 x 6 Ash Decking', 150, 20, 4, 1.35, 1),
      new LumberSubCategory('2', id, '5/4 x 6 Ash Decking', 145, 26, 3, 1.7, 2),
      new LumberSubCategory('3', id, '5/4 x 6 Ash Decking Slim', 130, 26, 3, 1.52, 3)
    ];
  }
}
