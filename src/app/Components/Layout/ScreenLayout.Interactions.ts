import {ScreenLayoutBehaviors} from "./ScreenLayout.Behaviors";

export class ScreenLayoutInteractions {
  private readonly _service: ScreenLayoutBehaviors;
  constructor(service: ScreenLayoutBehaviors) {
    this._service = service;
  }

  public LogoutClicked(): void {
    //TODO: Implement Logout
  }
}
