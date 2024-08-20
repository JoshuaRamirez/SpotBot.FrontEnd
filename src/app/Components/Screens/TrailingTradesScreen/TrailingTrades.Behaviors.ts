import {TrailingTradesModel} from "./TrailingTrades.Model";

export class TrailingTradesBehaviors {
  public readonly _data: TrailingTradesModel;
  public constructor(data: TrailingTradesModel) {
    this._data = data;
  }
  public AddOrder() {
    this._data.Orders.Add();
  }
}
