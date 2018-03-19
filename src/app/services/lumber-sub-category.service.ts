import { EventEmitter, Injectable, Output } from '@angular/core';
import { LumberSubCategory } from '../models/lumber-sub-category';
import { LumberCategory } from '../models/lumber-category';
import { LumberCategoryService } from './lumber-category.service';

@Injectable()
export class LumberSubCategoryService {
  @Output() lumberSubCategoryLoaded = new EventEmitter<LumberSubCategory>();
  @Output() lumberSubCategorySaved = new EventEmitter<LumberSubCategory>();
  lumberSubCategories: LumberSubCategory[];
  lumberCategory: LumberCategory;
  lumberSubCategory: LumberSubCategory;

  constructor(private lumberCategoryService: LumberCategoryService) {
    this.lumberCategoryService.categoryLoaded.subscribe(lumberCategory => this.loadSubCategoriesByCategory(lumberCategory));
  }

  private loadSubCategoriesByCategory(lumberCategory: LumberCategory) {
    if (lumberCategory == null)
      return;
    this.lumberCategory = lumberCategory;
    let id = this.lumberCategory.id;
    this.loadMockSubCategories(id);
  }

  private loadMockSubCategories(categoryId: string) {
    this.lumberSubCategories = [
      new LumberSubCategory('1', categoryId, '1 x 6 Ash Decking', 150, 20, 4, 1.35, 1),
      new LumberSubCategory('2', categoryId, '5/4 x 6 Ash Decking', 145, 26, 3, 1.7, 2),
      new LumberSubCategory('3', categoryId, '5/4 x 6 Ash Decking Slim', 130, 26, 3, 1.52, 3)
    ];
  }

  load(id: string) {
    if (this.lumberSubCategories == null)
      this.loadMockSubCategories('1');
    let i = this.lumberSubCategories.findIndex(c => c.id == id);
    this.lumberSubCategory = i >= 0 ? this.lumberSubCategories[i] : null;
    this.lumberSubCategoryLoaded.emit(this.lumberSubCategory);
    this.lumberCategoryService.load(this.lumberSubCategory.lumberCategoryId);
  }

  save(lumberSubCategory: LumberSubCategory) {
    if (lumberSubCategory.id == null) {
      lumberSubCategory.id = (this.lumberSubCategories.length + 1).toString();
      this.lumberSubCategories.push(lumberSubCategory);
    } else {
      this.updateSubCategory(lumberSubCategory);
    }
    this.lumberSubCategory = lumberSubCategory;
    this.lumberSubCategorySaved.emit();
  }

  updateSubCategory(lumberSubCategory: LumberSubCategory) {
    let i = this.lumberSubCategories.findIndex(c => c.id == lumberSubCategory.id);
    if (i >= 0)
      this.lumberSubCategories[i] = lumberSubCategory;
  }
}
