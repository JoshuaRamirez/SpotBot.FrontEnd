import {TrailingTradesServices} from "./TrailingTrades.Services";

export class TrailingTradesInteractions {
  private readonly _services: TrailingTradesServices;
  constructor(services: TrailingTradesServices) {
    this._services = services;
  }

  public PositionSizeInputChanged(): void {
    if (lastPositionSizeValue === this._services.TrailingTradesData.PositionSize) {
      return;
    }
    this._services.ValidatePositionSize();
    lastPositionSizeValue = this._services.TrailingTradesData.PositionSize;
  }
}


let lastPositionSizeValue = '';
