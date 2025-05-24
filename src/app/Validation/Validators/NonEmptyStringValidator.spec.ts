import { NonEmptyStringValidator } from './NonEmptyStringValidator';

describe('NonEmptyStringValidator', () => {
  let validator: NonEmptyStringValidator;

  beforeEach(() => {
    validator = new NonEmptyStringValidator();
  });

  it('should validate non-empty strings', () => {
    const result = validator.Validate('abc');
    expect(result.IsValid).toBeTrue();
    expect(result.Errors.length).toBe(0);
  });

  it('should respect MinLength', () => {
    validator.MinLength = 3;
    const result = validator.Validate('ab');
    expect(result.IsValid).toBeFalse();
    expect(result.Errors).toContain('String must be at least 3 character(s) long.');
  });

  it('should invalidate empty strings', () => {
    const result = validator.Validate('');
    expect(result.IsValid).toBeFalse();
    expect(result.Errors).toContain('String must have content and not be empty.');
  });

  it('should invalidate non-string values', () => {
    const result = validator.Validate(5 as any);
    expect(result.IsValid).toBeFalse();
    expect(result.Errors).toContain('Value must be a string.');
  });
});
