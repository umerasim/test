import { Injectable } from '@angular/core';
import {NetworkHttpClientService} from './network-http-client.service'


@Injectable()
export class EopHttpClientService {

  base_url : String = "";
  response_data : any = null;
  constructor(private networkHttpClientService : NetworkHttpClientService) { }

  authenticateUser(userName : String , password: String){
    
    console.log("fun called")
    var data = JSON.stringify( {
                                "user_email" : userName,
                                "user_password" : password,
                                "device_type" : 1
                                })
       
    this.networkHttpClientService.post(this.base_url, data).subscribe(
            data => this.response_data = JSON.stringify(data) ,
            error => alert(error) ,
            () => console.log("Finished")
            )
    
    return this.response_data;
  }
  

}
