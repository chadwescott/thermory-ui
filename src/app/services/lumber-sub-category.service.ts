import { EventEmitter, Injectable, Output } from '@angular/core';
import { LumberSubCategory } from '../models/lumber-sub-category';
import { LumberCategory } from '../models/lumber-category';
import { LumberCategoryService } from './lumber-category.service';
import { RepositoryService } from './repository.service';

@Injectable()
export class LumberSubCategoryService {
  @Output() lumberSubCategoryLoaded = new EventEmitter<LumberSubCategory>();
  @Output() lumberSubCategorySaved = new EventEmitter<LumberSubCategory>();
  lumberSubCategories: LumberSubCategory[];
  lumberCategory: LumberCategory;
  lumberSubCategory: LumberSubCategory;

  constructor(private lumberCategoryService: LumberCategoryService, private repository: RepositoryService) {
    this.lumberCategoryService.categoryLoaded.subscribe(lumberCategory => this.loadSubCategoriesByCategory(lumberCategory));
  }

  private loadSubCategoriesByCategory(lumberCategory: LumberCategory) {
    if (lumberCategory == null)
      return;
    this.lumberCategory = lumberCategory;
    this.loadLumberSubCategories();
  }

  private loadLumberSubCategories() {
    this.lumberSubCategories = this.repository.getLumberSubCategoriesByCategoryId(this.lumberCategory.id);
  }

  load(id: string) {
    this.lumberCategory = this.repository.getLumberCategoryBySubCategoryId(id);
    if (this.lumberCategory == null)
      return;
    
    this.lumberSubCategories = this.lumberCategory.lumberSubCategories;
    this.lumberSubCategory = this.lumberSubCategories.find(s => s.id == id);

    this.lumberSubCategoryLoaded.emit(this.lumberSubCategory);
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
