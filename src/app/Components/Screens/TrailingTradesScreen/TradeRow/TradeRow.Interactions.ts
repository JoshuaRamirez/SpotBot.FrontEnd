import {TradeRowBehaviors} from "./TradeRow.Behaviors";

export class TradeRowInteractions {
  private readonly _behaviors: TradeRowBehaviors;
  constructor(services: TradeRowBehaviors) {
    this._behaviors = services;
  }

  public DeleteButtonClicked() {
    this._behaviors.Delete();
  }
}
