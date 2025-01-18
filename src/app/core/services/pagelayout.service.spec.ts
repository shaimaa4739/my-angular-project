import { TestBed } from '@angular/core/testing';

import { PagelayoutService } from './pagelayout.service';

describe('PagelayoutService', () => {
  let service: PagelayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagelayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
