import {Component} from '@angular/core';
import {LoginScreenData} from "./LoginScreen.Data";
import {LoginScreenApi} from "./LoginScreen.Api";
import {LoginScreenEvents} from "./LoginScreen.Events";
import {LoginScreenService} from "./LoginScreen.Service";

@Component({
  selector: 'app-LoginScreen',
  templateUrl: './LoginScreen.Component.html',
  styleUrls: ['./LoginScreen.Component.scss']
})
export class LoginScreenComponent {
  public readonly Data: LoginScreenData;
  private readonly _api: LoginScreenApi;
  private readonly _service: LoginScreenService;
  private readonly _events: LoginScreenEvents;
  constructor() {
    this.Data = new LoginScreenData();
    this._service = new LoginScreenService(this.Data);
    this._api = new LoginScreenApi(this._service);
    this._events = new LoginScreenEvents(this._service);
  }
  onSubmit() {
    this._api.Login();
  }
}
