import {LoginScreenBehaviors} from "./LoginScreen.Behaviors";

export class LoginScreenEvents {
  private readonly _service: LoginScreenBehaviors;
  constructor(service: LoginScreenBehaviors) {
    this._service = service;
  }
}
