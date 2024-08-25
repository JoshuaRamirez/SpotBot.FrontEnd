import {TradeRowValidations} from "./TradeRow.Validations";
import {Order} from "../../../../Domain/Order";

export class TradeRowModel {
  private _order: Order;
  constructor() {
    this._order = new Order();
    this.Validations = new TradeRowValidations(this._order);
  }
  public get Order(): Order {
    return this._order;
  }
  public set Order(Order: Order) {
    this._order = Order;
    this.Validations = new TradeRowValidations(this._order);
  }
  public Validations: TradeRowValidations;
}
