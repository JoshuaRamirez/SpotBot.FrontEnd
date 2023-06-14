import {ScreenLayoutService} from "./ScreenLayout.Service";

export class ScreenLayoutHandler {
  private readonly _service: ScreenLayoutService;
  constructor(service: ScreenLayoutService) {
    this._service = service;
  }

  public LogoutClicked(): void {
    //TODO: Implement Logout
  }
}
