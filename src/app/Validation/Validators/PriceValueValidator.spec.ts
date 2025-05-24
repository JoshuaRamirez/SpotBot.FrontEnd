import { PriceValueValidator } from './PriceValueValidator';

describe('PriceValueValidator', () => {
  let validator: PriceValueValidator;

  beforeEach(() => {
    validator = new PriceValueValidator();
  });

  it('should validate proper price values', () => {
    const result = validator.Validate('12.34');
    expect(result.IsValid).toBeTrue();
  });

  it('should invalidate non-numeric price values', () => {
    const result = validator.Validate('abc');
    expect(result.IsValid).toBeFalse();
    expect(result.Errors.length).toBeGreaterThan(0);
  });

  it('should invalidate prices with too many decimals', () => {
    const result = validator.Validate('12.345');
    expect(result.IsValid).toBeFalse();
    expect(result.Errors).toContain('Must have 2 decimal places or less');
  });

  it('should invalidate empty values', () => {
    const result = validator.Validate('');
    expect(result.IsValid).toBeFalse();
    expect(result.Errors).toContain('Value Required');
  });
});
