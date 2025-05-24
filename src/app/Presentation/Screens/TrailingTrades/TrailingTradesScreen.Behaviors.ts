import {TrailingTradesScreenModel} from "./TrailingTradesScreen.Model";

export class TrailingTradesScreenBehaviors {
  public readonly _data: TrailingTradesScreenModel;
  public constructor(data: TrailingTradesScreenModel) {
    this._data = data;
  }
  public AddOrder() {
    this._data.Orders.Add();
  }
}
