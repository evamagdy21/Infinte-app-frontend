import { TestBed } from '@angular/core/testing';

import { CityBannerChangeService } from './city-banner-change.service';

describe('CityBannerChangeService', () => {
  let service: CityBannerChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityBannerChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
