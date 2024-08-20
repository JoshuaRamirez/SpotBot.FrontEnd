import {Order} from "./Order";
import {Application} from "./Application";

export class Orders extends Array<Order> {
  public Add(): void {
    const order = new Order(this);
    order.Id = Application.NewGuid();
    this.push(order);
  }
  public Delete(order: Order): void {
    const index = this.indexOf(order);
    this.splice(index, 1);
  }
  public Attach(order: Order): void {
    this.push(order);
  }
}
