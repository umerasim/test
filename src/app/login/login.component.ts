import { Component, OnInit } from '@angular/core';
import {EopHttpClientService} from '../network/core/eop-http-client.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[EopHttpClientService]
})
export class LoginComponent implements OnInit {

  response_data = "post data";

  constructor(private eopHttpClientService: EopHttpClientService) { }

  ngOnInit() {
  }

  loginFun(){
    this.response_data = this.eopHttpClientService.authenticateUser("captanumer@gmail.com","123");
  }

}
