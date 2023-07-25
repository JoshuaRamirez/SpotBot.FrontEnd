import {Orders} from "../../../Data/Orders";

export class TrailingTradesData {
  public constructor() {
    this.Orders = new Orders();
    this.Orders.Add();
  }
  public Orders: Orders;
}
