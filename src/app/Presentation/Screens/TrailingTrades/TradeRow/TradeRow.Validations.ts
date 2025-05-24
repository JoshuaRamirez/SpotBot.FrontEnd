import {ValidationResult} from "../../../../Validation/Core/ValidationResult";
import {Order} from "../../../../Domain/Order";
import {Validations} from "../../../../Validation/Validations";

export class TradeRowValidations {
  constructor(private readonly _order: Order) {}
  public get PositionSize(): ValidationResult {
    const result = Validations.Price(this._order.PositionSize);
    console.log(`PositionSize Valid: ${result.IsValid}`);
    return result;
  }

  public get EntryPrice(): ValidationResult {
    const result = Validations.Price(this._order.EntryPrice);
    return result;
  }

  public get StopLossLevel(): ValidationResult {
    const result = Validations.Price(this._order.StopLossLevel);
    return result;
  }

  public get TakeProfitLevel(): ValidationResult {
    const result = Validations.Price(this._order.TakeProfitLevel);
    return result;
  }

  public get TradeType(): ValidationResult {
    const result = Validations.Required(this._order.TradeType);
    return result;
  }
}
