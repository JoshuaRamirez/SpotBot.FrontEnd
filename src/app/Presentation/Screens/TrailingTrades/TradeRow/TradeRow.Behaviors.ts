import {TradeRowModel} from "./TradeRow.Model";

export class TradeRowBehaviors {
  public readonly Data: TradeRowModel;
  public constructor(tradeRowData: TradeRowModel) {
    this.Data = tradeRowData;
  }
  public Delete() {
    this.Data.Order.Delete();
  }
}
