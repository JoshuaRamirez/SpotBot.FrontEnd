import {Orders} from "../../../Domain/Orders";

export class TrailingTradesScreenModel {
  public constructor() {
    this.Orders = new Orders();
    this.Orders.Add();
  }
  public Orders: Orders;
}
