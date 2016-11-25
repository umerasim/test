import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http'
import 'rxjs/Rx'

@Injectable()
export class NetworkHttpClientService {

  constructor(private http: Http) { }

    createAuthorizationHeader(headers: Headers) {
    headers.append('customkey', 'customval'); 
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    }).map(res => res.json());
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    }).map(res => res.json());
  }

}
