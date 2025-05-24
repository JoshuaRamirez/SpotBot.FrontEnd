import { DateValidator } from './DateValidator';

describe('DateValidator', () => {
  let validator: DateValidator;

  beforeEach(() => {
    validator = new DateValidator();
  });

  it('should validate valid Date instances', () => {
    const result = validator.Validate(new Date());
    expect(result.IsValid).toBeTrue();
  });

  it('should invalidate non-Date values', () => {
    const result = validator.Validate('abc' as any);
    expect(result.IsValid).toBeFalse();
    expect(result.Errors).toContain('Must be an instance of Date.');
  });

  it('should invalidate invalid Date instances', () => {
    const invalid = new Date('invalid');
    const result = validator.Validate(invalid);
    expect(result.IsValid).toBeFalse();
    expect(result.Errors).toContain('Must be a valid date.');
  });
});
