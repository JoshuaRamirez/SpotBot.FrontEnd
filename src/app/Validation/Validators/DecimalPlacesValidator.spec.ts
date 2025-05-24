import { DecimalPlacesValidator } from './DecimalPlacesValidator';

describe('DecimalPlacesValidator', () => {
  let validator: DecimalPlacesValidator;

  beforeEach(() => {
    validator = new DecimalPlacesValidator();
  });

  it('should validate values with allowed decimal places', () => {
    validator.MaxDecimalPlaces = 2;
    expect(validator.Validate('10.12').IsValid).toBeTrue();
    expect(validator.Validate('10').IsValid).toBeTrue();
  });

  it('should invalidate values with too many decimal places', () => {
    validator.MaxDecimalPlaces = 2;
    const result = validator.Validate('10.123');
    expect(result.IsValid).toBeFalse();
    expect(result.Errors).toContain('Must have 2 decimal places or less');
  });
});
