import { IpAddressValidator } from './IpAddressValidator';

describe('IpAddressValidator', () => {
  let validator: IpAddressValidator;

  beforeEach(() => {
    validator = new IpAddressValidator();
  });

  it('should validate IPv4 addresses', () => {
    const result = validator.Validate('192.168.0.1');
    expect(result.IsValid).toBeTrue();
  });

  it('should validate IPv6 addresses', () => {
    const ipv6 = '2001:0db8:85a3:0000:0000:8a2e:0370:7334';
    const result = validator.Validate(ipv6);
    expect(result.IsValid).toBeTrue();
  });

  it('should invalidate invalid addresses', () => {
    const result = validator.Validate('999.999.999.999');
    expect(result.IsValid).toBeFalse();
    expect(result.Errors).toContain('Must be a valid IPv4 or IPv6 address.');
  });

  it('should invalidate non-string values', () => {
    const result = validator.Validate(123 as any);
    expect(result.IsValid).toBeFalse();
    expect(result.Errors).toContain('Value must be a string.');
  });
});
