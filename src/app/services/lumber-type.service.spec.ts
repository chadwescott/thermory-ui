import { TestBed, inject } from '@angular/core/testing';

import { LumberTypeService } from './lumber-type.service';

describe('LumberTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LumberTypeService]
    });
  });

  it('should be created', inject([LumberTypeService], (service: LumberTypeService) => {
    expect(service).toBeTruthy();
  }));
});
