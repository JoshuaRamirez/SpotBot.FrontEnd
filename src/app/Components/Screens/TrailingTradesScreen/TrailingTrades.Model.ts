import {Orders} from "../../../Domain/Orders";

export class TrailingTradesModel {
  public constructor() {
    this.Orders = new Orders();
    this.Orders.Add();
  }
  public Orders: Orders;
}
