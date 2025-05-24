import { Orders } from './Orders';
import { Order } from './Order';
import { Application } from './Application';

describe('Orders', () => {
  beforeEach(() => {
    spyOn(Application, 'NewGuid').and.returnValue('GUID');
  });

  it('adds a new order with generated id', () => {
    const orders = new Orders();
    orders.Add();
    expect(orders.length).toBe(1);
    expect(orders[0].Id).toBe('GUID');
    expect(Application.NewGuid).toHaveBeenCalled();
  });

  it('deletes an order', () => {
    const orders = new Orders();
    orders.Add();
    const order = orders[0];
    orders.Delete(order);
    expect(orders.length).toBe(0);
  });

  it('attaches an external order', () => {
    const orders = new Orders();
    const ext = new Order(orders);
    orders.Attach(ext);
    expect(orders.includes(ext)).toBeTrue();
  });
});
