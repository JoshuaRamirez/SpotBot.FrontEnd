import {GrowthTradingOptionsBehaviors} from "./GrowthTradingOptions.Behaviors";

export class GrowthTradingOptionsInteractions {
  constructor(private readonly _behaviors: GrowthTradingOptionsBehaviors) {}

  public SaveButtonClicked() {
    this._behaviors.Save();
  }
}
