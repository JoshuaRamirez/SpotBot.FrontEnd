import {ExchangeConnectionTestPassed} from "../../../Events/ExchangeConnectionTestPassed";
import {ExchangeScreenService} from "./ExchangeScreen.Service";
import {ExchangeScreenApi} from "./ExchangeScreen.Api";

export class ExchangeScreenEvents {
  private readonly _service: ExchangeScreenService;
  private readonly _api: ExchangeScreenApi;

  constructor(service: ExchangeScreenService, api: ExchangeScreenApi) {
    this._service = service;
    this._api = api;
    ExchangeConnectionTestPassed.Subscribe(this._service.WhenExchangeConnectionTestPassed, this._service);
  }
  TestConnectionButtonClicked() {
    this._api.TestExchangeConnection();
  }

}
