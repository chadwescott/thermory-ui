import { TestBed, inject } from '@angular/core/testing';

import { MockRepositoryService } from './mock-repository.service';

describe('MockRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockRepositoryService]
    });
  });

  it('should be created', inject([MockRepositoryService], (service: MockRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
