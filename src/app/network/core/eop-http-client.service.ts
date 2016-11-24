import { Injectable } from '@angular/core';
import {NetworkHttpClientService} from './network-http-client.service'


@Injectable()
export class EopHttpClientService {
  base_url : String = "http://echo.jsontest.com/title/ipsum/content/blah";
  response_data : any = null;
  constructor(private networkHttpClientService : NetworkHttpClientService) { }

  authenticateUser(userName : String , password: String){
    var data = JSON.stringify( {
                                "content" : userName,
                                "title" : password
                                })
    this.networkHttpClientService.post(this.base_url, data).subscribe(
            data => this.response_data = JSON.stringify(data) ,
            error => alert(error) ,
            () => console.log("Finished")
            )
    return this.response_data;
  }
  

}
