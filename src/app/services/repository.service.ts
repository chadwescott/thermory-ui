import { Injectable } from '@angular/core';
import { LumberCategory } from '../models/lumber-category';
import { LumberSubCategory } from '../models/lumber-sub-category';

@Injectable()
export abstract class RepositoryService {
  lumberCategories: LumberCategory[];

  constructor() { }
}
