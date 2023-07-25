import {TradeRowBehaviors} from "./TradeRow.Behaviors";

export class TradeRowInteractions {
  private readonly _behaviors: TradeRowBehaviors;
  constructor(services: TradeRowBehaviors) {
    this._behaviors = services;
  }

  public PositionSizeTextBoxChanged(): void {
    this._behaviors.MarkPositionSizeDirtyIfChanged();
  }
  public EntryPriceTextBoxChanged(): void {
    this._behaviors.MarkEntryPriceDirtyIfChanged();
  }
  public StopLossLevelTextBoxChanged(): void {
    this._behaviors.MarkStopLossLevelDirtyIfChanged();
  }
  public TakeProfitLevelTextBoxChanged(): void {
    this._behaviors.MarkTakeProfitLevelDirtyIfChanged();
  }
  public TradeTypeTextBoxChanged(): void {
    this._behaviors.MarkTradeTypeDirtyIfChanged();
  }

  public DeleteButtonClicked() {
    this._behaviors.Delete();
  }
}
