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
    this.lumberCategory = lumberCategory;
    let id = this.lumberCategory.id;
    this.lumberSubCategories = [
      new LumberSubCategory('1', id, '1 x 6 Ash Decking', 150, 20, 4, 1.35, 1),
      new LumberSubCategory('2', id, '5/4 x 6 Ash Decking', 145, 26, 3, 1.7, 2),
      new LumberSubCategory('3', id, '5/4 x 6 Ash Decking Slim', 130, 26, 3, 1.52, 3)
    ];
  }

  load(id: string) {
    let i = this.lumberSubCategories.findIndex(c => c.id == id);
    this.lumberSubCategory = i >= 0 ? this.lumberSubCategories[i] : null;
    this.lumberSubCategoryLoaded.emit(this.lumberSubCategory);
  }

  save(lumberSubCategory: LumberSubCategory) {

  }
}
