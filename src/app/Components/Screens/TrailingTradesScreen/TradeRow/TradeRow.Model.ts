import {TradeRowValidations} from "./TradeRow.Validations";
import {Order} from "../../../../Domain/Order";

export class TradeRowModel {
  constructor() {
    this.Order = new Order();
    this.Validations = new TradeRowValidations(this.Order);
  }
  public Order: Order;
  public Validations: TradeRowValidations;
}
