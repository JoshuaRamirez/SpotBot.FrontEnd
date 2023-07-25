import {LoginScreenApi} from "./LoginScreen.Api";

export class LoginScreenInteractions {
  private readonly _api: LoginScreenApi;
  public constructor(api: LoginScreenApi) {
    this._api = api;
  }
  LoginButtonClicked() {
    this._api.Login();
  }
}
