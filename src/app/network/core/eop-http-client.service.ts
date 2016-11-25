import { Injectable } from '@angular/core';
import {NetworkHttpClientService} from './network-http-client.service'
import 'rxjs/Rx'


@Injectable()
export class EopHttpClientService {
  base_url : String = "http://echo.jsontest.com/title/ipsum/content/blah";
  
  response_data : any = null;
  constructor(private networkHttpClientService : NetworkHttpClientService) { }

  authenticateUser(userName : String , password: String){    
    var data = JSON.stringify( {
                                "content" : userName,
                                "title" : password
                                });
    return this.networkHttpClientService.post(this.base_url, data);
  }

  getFaultDashData(method : string){
    return this.networkHttpClientService.get(this.base_url + method);
  }

  getRresponseBody(response_data: any){
    var response_body;
    response_data.map(res => res.json()).subscribe(
            data => {
              var jsonObj = JSON.parse(JSON.stringify(data));
              var response_body = jsonObj._body
              console.log(response_body);
              // this.response_data = JSON.stringify(data)
            } ,
            error => alert(error) ,
            () => console.log("Finished")
            );
            
      return response_body;
  }

}
