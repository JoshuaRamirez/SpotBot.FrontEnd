import {GrowthTradingOptions} from "../../Domain/GrowthTradingOptions";
import {ValidationResult} from "../../Validation/Core/ValidationResult";
import {Validations} from "../../Validation/Validations";

export class GrowthTradingOptionsValidations {
  constructor(private readonly _options: GrowthTradingOptions) {}

  public get GrowthBuyTriggerPercent(): ValidationResult {
    return Validations.Numeric(this._options.GrowthBuyTriggerPercent);
  }

  public get TrailingStopLossPercent(): ValidationResult {
    return Validations.Numeric(this._options.TrailingStopLossPercent);
  }

  public get WorkingCapital(): ValidationResult {
    return Validations.Numeric(this._options.WorkingCapital);
  }

  public get MinimumEntrySize(): ValidationResult {
    return Validations.Numeric(this._options.MinimumEntrySize);
  }

  public get ProfitBaseAsset(): ValidationResult {
    return Validations.NonEmptyString(this._options.ProfitBaseAsset);
  }

  public get TakeProfitPercent(): ValidationResult {
    return Validations.Numeric(this._options.TakeProfitPercent);
  }

  public get TakeProfitTriggerPercent(): ValidationResult {
    return Validations.Numeric(this._options.TakeProfitTriggerPercent);
  }

  public get TotalStopLossPercent(): ValidationResult {
    return Validations.Numeric(this._options.TotalStopLossPercent);
  }

  public get TotalTakeProfitAmount(): ValidationResult {
    return Validations.Numeric(this._options.TotalTakeProfitAmount);
  }

  public get BalancingIntervalMinutes(): ValidationResult {
    return Validations.NonNegativeInteger(this._options.BalancingIntervalMinutes);
  }

  public get RunLength(): ValidationResult {
    return Validations.NonEmptyString(this._options.RunLength);
  }
}
