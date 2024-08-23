import {ValidationResult} from "../../../../Core/ValidationResult";
import {Validators} from "../../../../Core/Validators";
import {Order} from "../../../../Domain/Order";

export class TradeRowValidations {
  constructor(private readonly _order: Order) {}
  public get PositionSize(): ValidationResult {
    const result = Validators.PriceValue(this._order.PositionSize);
    console.log(`PositionSize Valid: ${result.IsValid}`);
    return result;
  }

  public get EntryPrice(): ValidationResult {
    const result = Validators.PriceValue(this._order.EntryPrice);
    return result;
  }

  public get StopLossLevel(): ValidationResult {
    const result = Validators.PriceValue(this._order.StopLossLevel);
    return result;
  }

  public get TakeProfitLevel(): ValidationResult {
    const result = Validators.PriceValue(this._order.TakeProfitLevel);
    return result;
  }

  public get TradeType(): ValidationResult {
    const result = Validators.Required(this._order.TradeType);
    return result;
  }
}
