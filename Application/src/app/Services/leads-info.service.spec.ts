import { TestBed } from '@angular/core/testing';

import { LeadsInfoService } from './leads-info.service';

describe('LeadsInfoService', () => {
  let service: LeadsInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeadsInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
