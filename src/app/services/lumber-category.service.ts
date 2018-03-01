import { Injectable } from '@angular/core';
import { LumberCategory } from '../models/lumber-category';

@Injectable()
export class LumberCategoryService {
  lumberCategories: LumberCategory[] = [
     new LumberCategory("1", "1 x 4", 1),
     new LumberCategory("2", "2 x 4", 2)
  ];

  constructor() { }

}
