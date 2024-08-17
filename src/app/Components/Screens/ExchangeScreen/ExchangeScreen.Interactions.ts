import {ExchangeScreenBehaviors} from "./ExchangeScreen.Behaviors";

export class ExchangeScreenInteractions {
  private readonly _behaviors: ExchangeScreenBehaviors;

  constructor(behaviors: ExchangeScreenBehaviors) {
    this._behaviors = behaviors;
  }
  public async TestConnectionButtonClicked(): Promise<void> {
    await this._behaviors.TestExchangeConnection();
  }

  public async SaveButtonClicked(): Promise<void> {
    await this._behaviors.Save();
  }

}
