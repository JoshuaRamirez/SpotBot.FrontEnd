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
  public Delete() {
    this.Data.Order.Delete();
  }
}
