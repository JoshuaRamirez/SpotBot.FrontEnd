import { Order } from './Order';
import { Orders } from './Orders';
import { Application } from './Application';

describe('Order', () => {
  it('attaches to Application.Orders when no parent is provided', () => {
    Application.Orders = new Orders();
    const order = new Order();
    expect(Application.Orders.includes(order)).toBeTrue();
    expect(order.Parent).toBe(Application.Orders);
  });

  it('delete removes order from parent', () => {
    const orders = new Orders();
    const order = new Order(orders);
    orders.Attach(order);
    expect(orders.includes(order)).toBeTrue();
    order.Delete();
    expect(orders.includes(order)).toBeFalse();
  });
});
