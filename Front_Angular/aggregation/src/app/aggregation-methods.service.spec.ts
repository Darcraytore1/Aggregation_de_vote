import { TestBed } from '@angular/core/testing';

import { AggregationMethodsService } from './aggregation-methods.service';

describe('AggregationMethodsService', () => {
  let service: AggregationMethodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AggregationMethodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
