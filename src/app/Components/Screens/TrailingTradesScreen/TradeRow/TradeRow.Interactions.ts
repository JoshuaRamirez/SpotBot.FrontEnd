import {TradeRowServices} from "./TradeRow.Services";

export class TradeRowInteractions {
  private readonly _services: TradeRowServices;
  constructor(services: TradeRowServices) {
    this._services = services;
  }

  public PositionSizeChanged(): void {
    this._services.WhenPositionSizeChanged();
  }
  public EntryPriceChanged(): void {
    this._services.WhenEntryPriceChanged();
  }
  public StopLossLevelChanged(): void {
    this._services.WhenStopLossLevelChanged();
  }
  public TakeProfitLevelChanged(): void {
    this._services.WhenTakeProfitLevelChanged();
  }
  public TradeTypeChanged(): void {
    this._services.WhenTradeTypeChanged();
  }
}
