import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import {EopHttpClientService} from '../network/core/eop-http-client.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[EopHttpClientService]
})
export class LoginComponent implements OnInit {

constructor(private eopHttpClientService: EopHttpClientService, private router: Router) { }       

  response_data: any = "post data";
  loginStatus = "Error :"
  sAMUserName
  password

  ngOnInit() {
  }


  login(){
    var serviceResponse = this.eopHttpClientService.authenticateUser(this.sAMUserName, this.password);
    serviceResponse.subscribe(
            data => {  
          var dummyResponse = `
                    {
                      "processResponse": {
                        "userData": {
                          "givenName": "givenName: Muhammad",
                          "displayName": "displayName: Muhammad Zubair",
                          "sn": "sn: Zubair",
                          "memberOf": "memberOf: CN=SO Portal EOP,OU=Service Accounts,DC=etisalat,DC=corp,DC=ae, CN=HO_sh_OSS-DEV-TEAM _W,OU=Groups,OU=HOAUH,DC=etisalat,DC=corp,DC=ae, CN=OSS-DEV-TEAM,OU=MSG Distribution Groups,DC=etisalat,DC=corp,DC=ae, CN=SSO Enabled Users,OU=Service Accounts,DC=etisalat,DC=corp,DC=ae, CN=Buzz-Partners,OU=MSG Distribution Groups,DC=etisalat,DC=corp,DC=ae, CN=App_Internet_Browsing,OU=AppGroups,DC=etisalat,DC=corp,DC=ae, CN=SSL-VPN_RDP,OU=Service Accounts,DC=etisalat,DC=corp,DC=ae",
                          "telephoneNumber": "telephoneNumber: 0508148961"
                        }
                      },
                      "errorObject": {
                        "errorMessage": "shokha na ban"
                      },
                      "error": false
                    }
                `
            this.handleResponse(dummyResponse);

            } ,
            error => alert(error) ,
            () => console.log("Finished")
            );
  }

  handleResponse(loginResponse: any){
    this.response_data = JSON.parse(loginResponse)

    if(!this.response_data.error){
      let link = ['/home'];
      this.router.navigate(link);
    }else{
      this.loginStatus = this.loginStatus + this.response_data.errorObject.errorMessage;
    }

    return this.response_data;
  }
  
}
