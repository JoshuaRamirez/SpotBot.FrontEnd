import { NonNegativeIntegerValidator } from './NonNegativeIntegerValidator';

describe('NonNegativeIntegerValidator', () => {
  let validator: NonNegativeIntegerValidator;

  beforeEach(() => {
    validator = new NonNegativeIntegerValidator();
  });

  it('should validate positive integers', () => {
    const result = validator.Validate(5);
    expect(result.IsValid).toBeTrue();
    expect(result.Errors.length).toBe(0);
  });

  it('should invalidate negative integers', () => {
    const result = validator.Validate(-1);
    expect(result.IsValid).toBeFalse();
    expect(result.Errors).toContain('Value must be non-negative.');
  });

  it('should invalidate non-integers', () => {
    const result = validator.Validate(1.5 as any);
    expect(result.IsValid).toBeFalse();
    expect(result.Errors).toContain('Value must be an integer.');
  });

  it('should invalidate non-numeric values', () => {
    const result = validator.Validate('a' as any);
    expect(result.IsValid).toBeFalse();
    expect(result.Errors).toContain('Value must be a number.');
  });
});
