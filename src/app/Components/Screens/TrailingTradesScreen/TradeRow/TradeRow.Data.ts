import {TradeRowValidations} from "./TradeRow.Validations";
import {Order} from "../../../../Data/Order";

export class TradeRowData {
  constructor() {
    this.Order = new Order();
    this.Validations = new TradeRowValidations(this.Order);
  }
  public Order: Order;
  public Validations: TradeRowValidations;
}
