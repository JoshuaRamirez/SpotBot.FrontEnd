import { DateGreaterThan } from './DateGreaterThan';

describe('DateGreaterThan', () => {
  let validator: DateGreaterThan;

  beforeEach(() => {
    validator = new DateGreaterThan();
  });

  it('should validate when later date is after earlier date', () => {
    const earlier = new Date(2020, 0, 1);
    const later = new Date(2020, 0, 2);
    const result = validator.Validate({ earlierDate: earlier, laterDate: later });
    expect(result.IsValid).toBeTrue();
  });

  it('should invalidate when later date is before earlier date', () => {
    const earlier = new Date(2020, 0, 2);
    const later = new Date(2020, 0, 1);
    const result = validator.Validate({ earlierDate: earlier, laterDate: later });
    expect(result.IsValid).toBeFalse();
    expect(result.Errors).toContain('Later date must be after earlier date.');
  });

  it('should invalidate when inputs are not Date instances', () => {
    const result = validator.Validate({ earlierDate: 'a' as any, laterDate: 'b' as any });
    expect(result.IsValid).toBeFalse();
    expect(result.Errors).toContain('Earlier date must be a valid Date instance.');
    expect(result.Errors).toContain('Later date must be a valid Date instance.');
  });
});
