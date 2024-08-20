import {TradeRowModel} from "./TradeRow.Model";

export class TradeRowBehaviors {
  public readonly Data: TradeRowModel;
  private _lastPositionSize: string;
  private _lastEntryPrice: string;
  private _lastStopLossLevel: string;
  private _lastTakeProfitLevel: string;
  private _lastTradeType: string;
  public constructor(tradeRowData: TradeRowModel) {
    this.Data = tradeRowData;
    this._lastPositionSize = '';
    this._lastEntryPrice = '';
    this._lastStopLossLevel = '';
    this._lastTakeProfitLevel = '';
    this._lastTradeType = '';
  }
  public Delete() {
    this.Data.Order.Delete();
  }
}
