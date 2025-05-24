import { GrowthTradingOptions } from './GrowthTradingOptions';

describe('GrowthTradingOptions', () => {
  it('initializes values to empty strings', () => {
    const opts = new GrowthTradingOptions();
    expect(opts.GrowthBuyTriggerPercent).toBe('');
    expect(opts.TrailingStopLossPercent).toBe('');
    expect(opts.WorkingCapital).toBe('');
    expect(opts.MinimumEntrySize).toBe('');
    expect(opts.ProfitBaseAsset).toBe('');
    expect(opts.TakeProfitPercent).toBe('');
    expect(opts.TakeProfitTriggerPercent).toBe('');
    expect(opts.TotalStopLossPercent).toBe('');
    expect(opts.TotalTakeProfitAmount).toBe('');
    expect(opts.BalancingIntervalMinutes).toBe('');
    expect(opts.RunLength).toBe('');
  });
});
