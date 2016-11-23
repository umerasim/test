/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EopHttpClientService } from './eop-http-client.service';

describe('EopHttpClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EopHttpClientService]
    });
  });

  it('should ...', inject([EopHttpClientService], (service: EopHttpClientService) => {
    expect(service).toBeTruthy();
  }));
});
