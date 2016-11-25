import { Component } from '@angular/core';
import {NetworkHttpClientService} from './network/core/network-http-client.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NetworkHttpClientService]
})
export class AppComponent {
  title = 'app works!';
}
