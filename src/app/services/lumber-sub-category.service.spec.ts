import { TestBed, inject } from '@angular/core/testing';

import { LumberSubCategoryService } from './lumber-sub-category.service';

describe('LumberSubCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LumberSubCategoryService]
    });
  });

  it('should be created', inject([LumberSubCategoryService], (service: LumberSubCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
