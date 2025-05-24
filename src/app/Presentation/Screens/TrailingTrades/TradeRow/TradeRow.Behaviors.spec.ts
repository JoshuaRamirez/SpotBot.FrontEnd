import { TradeRowBehaviors } from './TradeRow.Behaviors';

describe('TradeRowBehaviors', () => {
  class MockOrder {
    deleted = false;
    Delete() {
      this.deleted = true;
    }
  }

  class MockModel {
    Order = new MockOrder();
  }

  let behaviors: TradeRowBehaviors;
  let model: MockModel;

  beforeEach(() => {
    model = new MockModel();
    behaviors = new TradeRowBehaviors(model as any);
  });

  it('should delete the order through the model', () => {
    behaviors.Delete();
    expect(model.Order.deleted).toBeTrue();
  });
});
