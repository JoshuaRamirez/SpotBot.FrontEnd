import {GrowthTradingOptionsModel} from "./GrowthTradingOptions.Model";

export class GrowthTradingOptionsBehaviors {
  constructor(private readonly _model: GrowthTradingOptionsModel) {}

  public Save() {
    // Placeholder for saving configuration
    console.log('Growth trading options saved', this._model.Options);
  }
}
