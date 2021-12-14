import { TestBed } from '@angular/core/testing';

import { SpiceStockService } from './spice-stock.service';

describe('SpiceStockService', () => {
  let service: SpiceStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpiceStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
