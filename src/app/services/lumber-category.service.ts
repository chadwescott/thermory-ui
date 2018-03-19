import { EventEmitter, Injectable, Output } from '@angular/core';
import { LumberCategory } from '../models/lumber-category';
import { RepositoryService } from './repository.service';

@Injectable()
export class LumberCategoryService {
  @Output() categoryLoaded = new EventEmitter<LumberCategory>();
  @Output() categorySaved = new EventEmitter();

  lumberCategories: LumberCategory[] = this.repository.lumberCategories;
  lumberCategory: LumberCategory;

  constructor(private repository: RepositoryService) {
  }

  load(id: string) {
    let i = this.lumberCategories.findIndex(c => c.id == id);
    this.lumberCategory = i >= 0 ? this.lumberCategories[i] : null;
    this.categoryLoaded.emit(this.lumberCategory);
  }

  save(lumberCategory: LumberCategory) {
    if (lumberCategory.id == null) {
      lumberCategory.id = (this.lumberCategories.length + 1).toString();
      this.lumberCategories.push(lumberCategory);
    } else {
      this.updateCategory(lumberCategory);
    }
    this.lumberCategory = lumberCategory;
    this.categorySaved.emit();
  }

  updateCategory(lumberCategory: LumberCategory) {
    let i = this.lumberCategories.findIndex(c => c.id == lumberCategory.id);
    if (i >= 0)
      this.lumberCategories[i] = lumberCategory;
  }
}
