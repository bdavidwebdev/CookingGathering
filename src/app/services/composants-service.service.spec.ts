import { TestBed } from '@angular/core/testing';

import { ComposantsServiceService } from './composants-service.service';

describe('ComposantsServiceService', () => {
  let service: ComposantsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposantsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
