import { Exchange } from './Exchange';
import { Application } from './Application';
import { EncryptionKeyResource } from '../Resources/EncryptionKeyResource';

const TEST_KEY = 'MDEyMzQ1Njc4OTAxMjM0NTY3ODkwMTIzNDU2Nzg5MDE=';

describe('Exchange', () => {
  beforeEach(() => {
    const key = new EncryptionKeyResource();
    key.Value = TEST_KEY;
    Application.EncryptionKey = key;
  });

  it('throws if encryption key is missing', () => {
    Application.EncryptionKey.Value = '';
    expect(() => new Exchange()).toThrowError('Application.EncryptionKey.Value is null or undefined.');
  });

  it('encrypts and decrypts api keys correctly', () => {
    const exchange = new Exchange();
    exchange.ApiPublicKey = 'PUB';
    exchange.ApiPrivateKey = 'PRIV';
    exchange.ApiKeyPassphrase = 'PASS';

    expect(exchange.ApiPublicKey).toBe('PUB');
    expect(exchange.ApiPrivateKey).toBe('PRIV');
    expect(exchange.ApiKeyPassphrase).toBe('PASS');
    expect(exchange.EncryptedApiPublicKey).not.toBe('PUB');
  });

  it('validation fails when fields are empty', () => {
    const exchange = new Exchange();
    const validations = exchange.Validations;
    expect(validations.ApiPublicKey.IsValid).toBeFalse();
    expect(validations.ApiPrivateKey.IsValid).toBeFalse();
    expect(validations.ApiKeyPassphrase.IsValid).toBeFalse();
  });

  it('validation passes when fields are populated', () => {
    const exchange = new Exchange();
    exchange.ApiPublicKey = 'PUB';
    exchange.ApiPrivateKey = 'PRIV';
    exchange.ApiKeyPassphrase = 'PASS';
    exchange.ApiVersion = '1';

    const validations = exchange.Validations;
    expect(validations.ApiPublicKey.IsValid).toBeTrue();
    expect(validations.ApiPrivateKey.IsValid).toBeTrue();
    expect(validations.ApiKeyPassphrase.IsValid).toBeTrue();
    expect(validations.ApiVersion.IsValid).toBeTrue();
  });
});
