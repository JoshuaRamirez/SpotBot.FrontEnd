import {TradeRowData} from "./TradeRow.Data";

export class TradeRowServices {
  public readonly TradeRowData: TradeRowData;
  private _lastPositionSize: string;
  private _lastEntryPrice: string;
  private _lastStopLossLevel: string;
  private _lastTakeProfitLevel: string;
  private _lastTradeType: string;
  constructor(tradeRowData: TradeRowData) {
    this.TradeRowData = tradeRowData;
    this._lastPositionSize = '';
    this._lastEntryPrice = '';
    this._lastStopLossLevel = '';
    this._lastTakeProfitLevel = '';
    this._lastTradeType = '';
  }
  public WhenPositionSizeChanged(): void {
    if (this._lastPositionSize === this.TradeRowData.PositionSize) {
      return;
    }
    this._lastPositionSize = this.TradeRowData.PositionSize;
    this.TradeRowData.Validations.PositionSize.IsDirty = true;
  }
  public WhenEntryPriceChanged(): void {
    if (this._lastEntryPrice === this.TradeRowData.EntryPrice) {
      return;
    }
    this._lastEntryPrice = this.TradeRowData.EntryPrice;
    this.TradeRowData.Validations.EntryPrice.IsDirty = true;
  }
  public WhenStopLossLevelChanged(): void {
    if (this._lastStopLossLevel === this.TradeRowData.StopLossLevel) {
      return;
    }
    this._lastStopLossLevel = this.TradeRowData.StopLossLevel;
    this.TradeRowData.Validations.StopLossLevel.IsDirty = true;
  }
  public WhenTakeProfitLevelChanged(): void {
    if (this._lastTakeProfitLevel === this.TradeRowData.TakeProfitLevel) {
      return;
    }
    this._lastTakeProfitLevel = this.TradeRowData.TakeProfitLevel;
    this.TradeRowData.Validations.TakeProfitLevel.IsDirty = true;
  }
  public WhenTradeTypeChanged(): void {
    if (this._lastTradeType === this.TradeRowData.TradeType) {
      return;
    }
    this._lastTradeType = this.TradeRowData.TradeType;
    this.TradeRowData.Validations.TradeType.IsDirty = true;
  }
}
