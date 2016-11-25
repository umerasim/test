import { Injectable } from '@angular/core';
import {EopHttpClientService} from './core/eop-http-client.service'

@Injectable()
export class FaultDashboardService {

  faultDashboard_Method = "";

  constructor(private eopHttpClientService: EopHttpClientService) { }

  getFaultDashboardData(){
    return this.eopHttpClientService.getFaultDashData(this.faultDashboard_Method);
  }

}
