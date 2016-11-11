/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StickyheaderService } from './stickyheader.service';

describe('Service: Stickyheader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StickyheaderService]
    });
  });

  it('should ...', inject([StickyheaderService], (service: StickyheaderService) => {
    expect(service).toBeTruthy();
  }));
});
