import { EventEmitter, Injectable, Output } from '@angular/core';
import { LumberCategory } from '../models/lumber-category';

@Injectable()
export class LumberCategoryService {
  @Output() categorySaved = new EventEmitter();

  lumberCategories: LumberCategory[] = [
    new LumberCategory('1', '6" Ash Decking', 1),
    new LumberCategory('2', '4" Ash Decking', 2),
    new LumberCategory('3', 'Ash Porch Flooring', 3),
    new LumberCategory('4', 'Ash Cladding', 4),
    new LumberCategory('5', 'Ash Strips / Wide', 5),
    new LumberCategory('6', 'Interior Flooring', 6),
    new LumberCategory('7', 'Quick Deck', 7),
    new LumberCategory('8', 'Scratch + Dent', 8),
    new LumberCategory('9', 'Knotty Pine Decking', 9),
    new LumberCategory('10', 'Pine Cladding', 10),
    new LumberCategory('11', 'Next', 11),
    new LumberCategory('12', 'PaC Strips', 12),
    new LumberCategory('13', 'Clear Pine', 13),
    new LumberCategory('14', 'Pine Strips/Wide', 14),
    new LumberCategory('15', '5" Ash Decking', 15),
    new LumberCategory('16', 'Ash Shingles (S1)', 16),
    new LumberCategory('17', 'Pavers', 17),
    new LumberCategory('18', 'Drift Ash Decking', 18),
    new LumberCategory('19', 'Drift Ash Cladding', 19),
    new LumberCategory('20', 'Drift Pine Decking', 20),
    new LumberCategory('21', 'Drift Spruce Cladding', 21)
  ];
  lumberCategory: LumberCategory;

  constructor() { }

  load(id: string) {
    let i = this.lumberCategories.findIndex(c => c.id == id);
    this.lumberCategory = i >= 0 ? this.lumberCategories[i] : null;
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
