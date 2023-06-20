import { TestBed } from '@angular/core/testing';

import { InfoSiteService } from './info-site.service';

describe('InfoSiteService', () => {
  let service: InfoSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
