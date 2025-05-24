import { NumericValidator } from './NumericValidator';

describe('NumericValidator', () => {
  let validator: NumericValidator;

  beforeEach(() => {
    validator = new NumericValidator();
  });

  it('should validate numeric strings', () => {
    expect(validator.Validate('123').IsValid).toBeTrue();
    expect(validator.Validate('3.14').IsValid).toBeTrue();
  });

  it('should invalidate non-numeric strings', () => {
    const result = validator.Validate('abc');
    expect(result.IsValid).toBeFalse();
    expect(result.Errors).toContain('Valid number required.');
  });
});
