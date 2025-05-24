import {TrailingTradesScreenBehaviors} from "./TrailingTradesScreen.Behaviors";

export class TrailingTradesScreenInteractions {
  private _behaviors: TrailingTradesScreenBehaviors;
  public constructor(behaviors: TrailingTradesScreenBehaviors) {
    this._behaviors = behaviors;
  }
  public AddButtonClicked() {
    this._behaviors.AddOrder();
  }
}
