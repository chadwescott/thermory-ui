import { EventEmitter, Injectable, Output } from '@angular/core';
import { LumberCategory } from '../models/lumber-category';
import { RepositoryService } from './repository.service';

@Injectable()
export class LumberCategoryService {
  @Output() categoryLoaded = new EventEmitter<LumberCategory>();
  @Output() categorySaved = new EventEmitter();

  lumberCategories: LumberCategory[];
  lumberCategory: LumberCategory;

  constructor(private repository: RepositoryService) {
    this.lumberCategories = this.repository.getLumberCategories();
  }

  load(id: string) {
    let i = this.lumberCategories.findIndex(c => c.id == id);
    this.lumberCategory = i >= 0 ? this.lumberCategories[i] : null;
    this.categoryLoaded.emit(this.lumberCategory);
  }

  save(lumberCategory: LumberCategory) {
    this.lumberCategory = this.repository.saveLumberCategory(lumberCategory);
    this.categorySaved.emit();
  }
}
