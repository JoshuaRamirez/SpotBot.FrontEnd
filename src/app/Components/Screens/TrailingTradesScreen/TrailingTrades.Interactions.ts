import {TrailingTradesBehaviors} from "./TrailingTrades.Behaviors";

export class TrailingTradesInteractions {
  private _behaviors: TrailingTradesBehaviors;
  public constructor(behaviors: TrailingTradesBehaviors) {
    this._behaviors = behaviors;
  }
  public AddButtonClicked() {
    this._behaviors.AddOrder();
  }
}
