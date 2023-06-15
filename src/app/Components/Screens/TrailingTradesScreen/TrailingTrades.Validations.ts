import {TrailingTradesData} from "./TrailingTrades.Data";
import {ValidationResult} from "../../../Core/ValidationResult";
import {Validations} from "../../../Core/Validations";
export class TrailingTradesValidations {
  private _trailingTradesData: TrailingTradesData;
  constructor(trailingTradesData: TrailingTradesData) {
    this._trailingTradesData = trailingTradesData;
  }
  public get PositionSize(): ValidationResult {
    return Validations.PriceValue(this._trailingTradesData.PositionSize);
  }

  public get EntryPrice(): ValidationResult {
    return Validations.PriceValue(this._trailingTradesData.EntryPrice);
  }

  public get StopLossLevel(): ValidationResult {
    return Validations.PriceValue(this._trailingTradesData.StopLossLevel);
  }

  public get TakeProfitLevel(): ValidationResult {
    return Validations.PriceValue(this._trailingTradesData.TakeProfitLevel);
  }

  public get TradeType(): ValidationResult {
    return Validations.Required(this._trailingTradesData.TradeType);
  }

}
