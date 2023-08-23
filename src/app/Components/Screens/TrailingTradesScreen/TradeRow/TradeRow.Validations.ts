import {ValidationResult} from "../../../../Core/ValidationResult";
import {Validators} from "../../../../Core/Validators";
import {Order} from "../../../../Data/Order";

export class TradeRowValidations {
  private readonly _order: Order;
  private readonly positionSizeValidationResult: ValidationResult;
  private readonly entryPriceValidationResult: ValidationResult;
  private readonly stopLossLevelValidationResult: ValidationResult;
  private readonly takeProfitLevelValidationResult: ValidationResult;
  private readonly tradeTypeValidationResult: ValidationResult;
  constructor(order: Order) {
    this._order = order;
    this.positionSizeValidationResult = new ValidationResult();
    this.entryPriceValidationResult = new ValidationResult();
    this.stopLossLevelValidationResult = new ValidationResult();
    this.takeProfitLevelValidationResult = new ValidationResult();
    this.tradeTypeValidationResult = new ValidationResult();
  }
  public get PositionSize(): ValidationResult {
    const result = Validators.PriceValue(this._order.PositionSize);
    console.log(`PositionSize Valid: ${result.IsValid}`);
    this.positionSizeValidationResult.IsValid = result.IsValid;
    this.positionSizeValidationResult.Message = result.Message;
    return this.positionSizeValidationResult;
  }

  public get EntryPrice(): ValidationResult {
    const result = Validators.PriceValue(this._order.EntryPrice);
    this.entryPriceValidationResult.IsValid = result.IsValid;
    this.entryPriceValidationResult.Message = result.Message;
    return this.entryPriceValidationResult;
  }

  public get StopLossLevel(): ValidationResult {
    const result = Validators.PriceValue(this._order.StopLossLevel);
    this.stopLossLevelValidationResult.IsValid = result.IsValid;
    this.stopLossLevelValidationResult.Message = result.Message;
    return this.stopLossLevelValidationResult;
  }

  public get TakeProfitLevel(): ValidationResult {
    const result = Validators.PriceValue(this._order.TakeProfitLevel);
    this.takeProfitLevelValidationResult.IsValid = result.IsValid;
    this.takeProfitLevelValidationResult.Message = result.Message;
    return this.takeProfitLevelValidationResult;
  }

  public get TradeType(): ValidationResult {
    const result = Validators.Required(this._order.TradeType);
    this.tradeTypeValidationResult.IsValid = result.IsValid;
    this.tradeTypeValidationResult.Message = result.Message;
    return this.tradeTypeValidationResult;
  }
}
