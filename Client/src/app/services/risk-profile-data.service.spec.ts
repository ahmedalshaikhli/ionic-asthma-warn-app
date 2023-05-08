import { TestBed } from '@angular/core/testing';

import { RiskProfileDataService } from './risk-profile-data.service';

describe('RiskProfileDataService', () => {
  let service: RiskProfileDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiskProfileDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
