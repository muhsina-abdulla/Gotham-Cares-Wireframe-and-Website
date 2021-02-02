import { TestBed } from '@angular/core/testing';

import { OutletlistService } from './outletlist.service';

describe('OutletlistService', () => {
  let service: OutletlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutletlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
