import { Component, OnInit } from '@angular/core';
import {EopHttpClientService} from '../network/core/eop-http-client.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[EopHttpClientService]
})
export class LoginComponent implements OnInit {

constructor(private eopHttpClientService: EopHttpClientService) { }       

  response_data = "post data";

  ngOnInit() {
  }


  login(){
    var serviceResponse = this.eopHttpClientService.authenticateUser("captanumer@gmail.com","123");
    serviceResponse.subscribe(
            data => {
              // data.title
              // data.title
              this.response_data = JSON.stringify(data)
              return this.response_data;
            } ,
            error => alert(error) ,
            () => console.log("Finished")
            );
  }
  
}
