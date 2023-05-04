import {LoginScreenService} from "./LoginScreen.Service";

export class LoginScreenEvents {
  private readonly _service: LoginScreenService;
  constructor(service: LoginScreenService) {
    this._service = service;
  }
}
