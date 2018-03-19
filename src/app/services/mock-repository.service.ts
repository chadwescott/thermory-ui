import { Injectable } from '@angular/core';
import { RepositoryService } from './repository.service';
import { LumberCategory } from '../models/lumber-category';
import { LumberSubCategory } from '../models/lumber-sub-category';

@Injectable()
export class MockRepositoryService extends RepositoryService {
  constructor() {
    super();
    this.lumberCategories = [
      new LumberCategory('1', '6" Ash Decking', 1, [
        new LumberSubCategory('1', '1', '1 x 6 Ash Decking', 150, 20, 4, 1.35, 1),
        new LumberSubCategory('2', '1', '5/4 x 6 Ash Decking', 145, 26, 3, 1.7, 2),
        new LumberSubCategory('3', '1', '5/4 x 6 Ash Decking Slim', 130, 26, 3, 1.52, 3)
      ]),
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
  }
}
