/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FaultDashboardService } from './fault-dashboard.service';

describe('FaultDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaultDashboardService]
    });
  });

  it('should ...', inject([FaultDashboardService], (service: FaultDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
