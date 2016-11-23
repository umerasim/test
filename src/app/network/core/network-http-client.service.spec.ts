/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NetworkHttpClientService } from './network-http-client.service';

describe('NetworkHttpClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetworkHttpClientService]
    });
  });

  it('should ...', inject([NetworkHttpClientService], (service: NetworkHttpClientService) => {
    expect(service).toBeTruthy();
  }));
});
