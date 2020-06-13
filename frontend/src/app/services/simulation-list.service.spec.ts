import { TestBed } from '@angular/core/testing';

import { SimulationListService } from './simulation-list.service';

describe('SimulationListService', () => {
  let service: SimulationListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimulationListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
