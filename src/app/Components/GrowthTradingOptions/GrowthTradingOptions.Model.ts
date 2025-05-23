import {GrowthTradingOptions} from "../../Domain/GrowthTradingOptions";
import {GrowthTradingOptionsValidations} from "./GrowthTradingOptions.Validations";

export class GrowthTradingOptionsModel {
  constructor() {
    this.Options = new GrowthTradingOptions();
    this.Validations = new GrowthTradingOptionsValidations(this.Options);
  }

  public Options: GrowthTradingOptions;
  public Validations: GrowthTradingOptionsValidations;
}
