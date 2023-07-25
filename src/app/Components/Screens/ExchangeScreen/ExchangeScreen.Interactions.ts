import {ExchangeScreenBehaviors} from "./ExchangeScreen.Behaviors";
import {ExchangeScreenApi} from "./ExchangeScreen.Api";

export class ExchangeScreenInteractions {
  private readonly _behaviors: ExchangeScreenBehaviors;
  private readonly _api: ExchangeScreenApi;

  constructor(behaviors: ExchangeScreenBehaviors, api: ExchangeScreenApi) {
    this._behaviors = behaviors;
    this._api = api;
  }
  public TestConnectionButtonClicked() {
    this._api.TestExchangeConnection();
  }

  public SaveButtonClicked(): void {
    this._api.Save();
  }

}
