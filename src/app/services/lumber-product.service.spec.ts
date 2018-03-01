import { TestBed, inject } from '@angular/core/testing';

import { LumberProductService } from './lumber-product.service';

describe('LumberProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LumberProductService]
    });
  });

  it('should be created', inject([LumberProductService], (service: LumberProductService) => {
    expect(service).toBeTruthy();
  }));
});
