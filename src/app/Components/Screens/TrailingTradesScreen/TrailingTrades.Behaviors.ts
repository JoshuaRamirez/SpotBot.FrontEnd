import {TrailingTradesData} from "./TrailingTrades.Data";

export class TrailingTradesBehaviors {
  public readonly _data: TrailingTradesData;
  public constructor(data: TrailingTradesData) {
    this._data = data;
  }
  public AddOrder() {
    this._data.Orders.Add();
  }
}
