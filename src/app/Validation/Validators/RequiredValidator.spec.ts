import { RequiredValidator } from './RequiredValidator';

describe('RequiredValidator', () => {
  let validator: RequiredValidator;

  beforeEach(() => {
    validator = new RequiredValidator();
  });

  it('should validate defined and non-empty values', () => {
    expect(validator.Validate('value').IsValid).toBeTrue();
    expect(validator.Validate([1]).IsValid).toBeTrue();
  });

  it('should invalidate undefined or null', () => {
    const resultUndefined = validator.Validate(undefined as any);
    const resultNull = validator.Validate(null as any);
    expect(resultUndefined.IsValid).toBeFalse();
    expect(resultNull.IsValid).toBeFalse();
  });

  it('should invalidate empty strings', () => {
    const result = validator.Validate('');
    expect(result.IsValid).toBeFalse();
    expect(result.Errors).toContain('Value Required');
  });

  it('should invalidate empty arrays', () => {
    const result = validator.Validate([] as any);
    expect(result.IsValid).toBeFalse();
    expect(result.Errors).toContain('Value Required');
  });
});
