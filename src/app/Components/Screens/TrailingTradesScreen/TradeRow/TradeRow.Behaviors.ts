import {TradeRowData} from "./TradeRow.Data";

export class TradeRowBehaviors {
  public readonly Data: TradeRowData;
  private _lastPositionSize: string;
  private _lastEntryPrice: string;
  private _lastStopLossLevel: string;
  private _lastTakeProfitLevel: string;
  private _lastTradeType: string;
  public constructor(tradeRowData: TradeRowData) {
    this.Data = tradeRowData;
    this._lastPositionSize = '';
    this._lastEntryPrice = '';
    this._lastStopLossLevel = '';
    this._lastTakeProfitLevel = '';
    this._lastTradeType = '';
  }
  public MarkPositionSizeDirtyIfChanged(): void {
    if (this._lastPositionSize === this.Data.Order.PositionSize) {
      return;
    }
    this._lastPositionSize = this.Data.Order.PositionSize;
    this.Data.Validations.PositionSize.IsDirty = true;
  }
  public MarkEntryPriceDirtyIfChanged(): void {
    if (this._lastEntryPrice === this.Data.Order.EntryPrice) {
      return;
    }
    this._lastEntryPrice = this.Data.Order.EntryPrice;
    this.Data.Validations.EntryPrice.IsDirty = true;
  }
  public MarkStopLossLevelDirtyIfChanged(): void {
    if (this._lastStopLossLevel === this.Data.Order.StopLossLevel) {
      return;
    }
    this._lastStopLossLevel = this.Data.Order.StopLossLevel;
    this.Data.Validations.StopLossLevel.IsDirty = true;
  }
  public MarkTakeProfitLevelDirtyIfChanged(): void {
    if (this._lastTakeProfitLevel === this.Data.Order.TakeProfitLevel) {
      return;
    }
    this._lastTakeProfitLevel = this.Data.Order.TakeProfitLevel;
    this.Data.Validations.TakeProfitLevel.IsDirty = true;
  }
  public MarkTradeTypeDirtyIfChanged(): void {
    if (this._lastTradeType === this.Data.Order.TradeType) {
      return;
    }
    this._lastTradeType = this.Data.Order.TradeType;
    this.Data.Validations.TradeType.IsDirty = true;
  }
  public Delete() {
    this.Data.Order.Delete();
  }
}
