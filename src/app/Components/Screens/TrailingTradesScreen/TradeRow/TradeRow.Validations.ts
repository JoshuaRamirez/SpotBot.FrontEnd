import {ValidationResult} from "../../../../Core/ValidationResult";
import {Validators} from "../../../../Core/Validators";
import {TradeRowData} from "./TradeRow.Data";

export class TradeRowValidations {
  private readonly _tradeRowData: TradeRowData;
  private readonly positionSizeValidationResult: ValidationResult;
  private readonly entryPriceValidationResult: ValidationResult;
  private readonly stopLossLevelValidationResult: ValidationResult;
  private readonly takeProfitLevelValidationResult: ValidationResult;
  private readonly tradeTypeValidationResult: ValidationResult;
  constructor(tradeRowData: TradeRowData) {
    this._tradeRowData = tradeRowData;
    this.positionSizeValidationResult = new ValidationResult();
    this.entryPriceValidationResult = new ValidationResult();
    this.stopLossLevelValidationResult = new ValidationResult();
    this.takeProfitLevelValidationResult = new ValidationResult();
    this.tradeTypeValidationResult = new ValidationResult();
  }
  public get PositionSize(): ValidationResult {
    const result = Validators.PriceValue(this._tradeRowData.PositionSize);
    this.positionSizeValidationResult.IsValid = result.IsValid;
    this.positionSizeValidationResult.Message = result.Message;
    return this.positionSizeValidationResult;
  }

  public get EntryPrice(): ValidationResult {
    const result = Validators.PriceValue(this._tradeRowData.EntryPrice);
    this.entryPriceValidationResult.IsValid = result.IsValid;
    this.entryPriceValidationResult.Message = result.Message;
    return this.entryPriceValidationResult;
  }

  public get StopLossLevel(): ValidationResult {
    const result = Validators.PriceValue(this._tradeRowData.StopLossLevel);
    this.stopLossLevelValidationResult.IsValid = result.IsValid;
    this.stopLossLevelValidationResult.Message = result.Message;
    return this.stopLossLevelValidationResult;
  }

  public get TakeProfitLevel(): ValidationResult {
    const result = Validators.PriceValue(this._tradeRowData.TakeProfitLevel);
    this.takeProfitLevelValidationResult.IsValid = result.IsValid;
    this.takeProfitLevelValidationResult.Message = result.Message;
    return this.takeProfitLevelValidationResult;
  }

  public get TradeType(): ValidationResult {
    const result = Validators.Required(this._tradeRowData.TradeType);
    this.tradeTypeValidationResult.IsValid = result.IsValid;
    this.tradeTypeValidationResult.Message = result.Message;
    return this.tradeTypeValidationResult;
  }
}
