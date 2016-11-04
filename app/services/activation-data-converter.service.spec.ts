/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActivationDataConverterService } from './activation-data-converter.service';

describe('Service: ActivationDataConverter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivationDataConverterService]
    });
  });

  it('should ...', inject([ActivationDataConverterService], (service: ActivationDataConverterService) => {
    expect(service).toBeTruthy();
  }));
});
