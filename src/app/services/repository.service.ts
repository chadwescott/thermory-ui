import { Injectable } from '@angular/core';
import { LumberCategory } from '../models/lumber-category';
import { LumberSubCategory } from '../models/lumber-sub-category';

@Injectable()
export abstract class RepositoryService {
  constructor() {}
  abstract saveLumberCategory(category: LumberCategory): LumberCategory;
  abstract getLumberCategories(): LumberCategory[];
  abstract getLumberCategoryBySubCategoryId(id: string) : LumberCategory;
  abstract getLumberSubCategoriesByCategoryId(categoryId: string) : LumberSubCategory[];
  abstract getLumberSubCategoryById(id: string) : LumberSubCategory;
}
