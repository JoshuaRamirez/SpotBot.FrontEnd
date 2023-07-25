import {Component} from '@angular/core';
import {LoginScreenData} from "./LoginScreen.Data";
import {LoginScreenApi} from "./LoginScreen.Api";
import {LoginScreenEvents} from "./LoginScreen.Events";
import {LoginScreenBehaviors} from "./LoginScreen.Behaviors";
import {LoginScreenInteractions} from "./LoginScreen.Interactions";

@Component({
  selector: 'app-login-screen',
  templateUrl: './LoginScreen.Template.html',
  styleUrls: ['./LoginScreen.Styles.scss']
})
export class LoginScreenComponent {
  public readonly Data: LoginScreenData;
  public readonly Interactions: LoginScreenInteractions;
  private readonly _api: LoginScreenApi;
  private readonly _behaviors: LoginScreenBehaviors;
  private readonly _events: LoginScreenEvents;
  constructor() {
    this.Data = new LoginScreenData();
    this._behaviors = new LoginScreenBehaviors(this.Data);
    this._api = new LoginScreenApi(this._behaviors);
    this._events = new LoginScreenEvents(this._behaviors);
    this.Interactions = new LoginScreenInteractions(this._api);
  }

}
