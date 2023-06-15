import {TrailingTradesData} from "./TrailingTrades.Data";

export class TrailingTradesServices {
  public readonly TrailingTradesData: TrailingTradesData;
  constructor(trailingTradesData: TrailingTradesData) {
    this.TrailingTradesData = trailingTradesData;
  }

  public ValidatePositionSize(): void {

  }
}
