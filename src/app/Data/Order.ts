import {Orders} from "./Orders";
import {Application} from "./Application";

export class Order {
constructor(parent?: Orders) {
    this.Id = '';
    this.PositionSize = '';
    this.EntryPrice = '';
    this.StopLossLevel = '';
    this.TakeProfitLevel = '';
    this.TradeType = '';
    if (!parent) {
      parent = Application.Orders;
      parent.Attach(this);
    }
    this.Parent = parent;
  }
  public Id: string
  public PositionSize: string
  public EntryPrice: string
  public StopLossLevel: string
  public TakeProfitLevel: string
  public TradeType: string
  public Parent: Orders

  Delete() {
    this.Parent.Delete(this);
  }
}
