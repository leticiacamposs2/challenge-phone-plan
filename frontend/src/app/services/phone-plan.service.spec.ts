import { TestBed } from '@angular/core/testing';

import { PhonePlanService } from './phone-plan.service';

describe('PhonePlanService', () => {
  let service: PhonePlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhonePlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
