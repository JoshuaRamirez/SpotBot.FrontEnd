import { TrailingTradesScreenBehaviors } from './TrailingTradesScreen.Behaviors';

describe('TrailingTradesScreenBehaviors', () => {
  class MockOrders {
    length = 0;
    Add() {
      this.length++;
    }
  }
  class MockModel {
    Orders = new MockOrders();
  }

  let behaviors: TrailingTradesScreenBehaviors;
  let model: MockModel;

  beforeEach(() => {
    model = new MockModel();
    behaviors = new TrailingTradesScreenBehaviors(model as any);
  });

  it('should add a new order to the model', () => {
    const initialLength = model.Orders.length;
    behaviors.AddOrder();
    expect(model.Orders.length).toBe(initialLength + 1);
  });
});
