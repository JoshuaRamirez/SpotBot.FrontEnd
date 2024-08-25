import {Encryption} from "../Core/Encryption";
import {ValidationResult} from "../Validation/Core/ValidationResult";
import {Validations} from "../Validation/Validations";
import {Application} from "./Application";
export class Exchange {
  private readonly _encryption: Encryption;
  public readonly Validations: ExchangeValidations;
  private _encryptedApiPublicKey: string = "";
  private _encryptedApiPrivateKey: string = "";
  private _encryptedApiKeyPassphrase: string = "";
  public ApiVersion?: string;
  constructor() {
    const encryptionKey = Application.EncryptionKey.Value;
    if (!encryptionKey) {
      throw new Error("Application.EncryptionKey.Value is null or undefined.")
    }
    this._encryption = new Encryption(encryptionKey);
    this.Validations = new ExchangeValidations(this);
  }
  get ApiKeyPassphrase(): string {
    if (!this._encryptedApiKeyPassphrase) {
      return "";
    }
    return this._encryption.Decrypt(this._encryptedApiKeyPassphrase);
  }
  set ApiKeyPassphrase(value: string) {
    if (!value) {
      this._encryptedApiKeyPassphrase = "";
    } else {
      this._encryptedApiKeyPassphrase = this._encryption.Encrypt(value);
    }
  }
  get ApiPrivateKey(): string {
    if (!this._encryptedApiPrivateKey) {
      return "";
    } else {
      return this._encryption.Decrypt(this._encryptedApiPrivateKey);
    }
  }
  set ApiPrivateKey(value: string) {
    this._encryptedApiPrivateKey = this._encryption.Encrypt(value);
    if (!value) {
      this._encryptedApiPrivateKey = "";
    }
  }
  get ApiPublicKey(): string {
    if (!this._encryptedApiPublicKey) {
      return "";
    } else {
      return this._encryption.Decrypt(this._encryptedApiPublicKey);
    }
  }
  set ApiPublicKey(value: string) {
    if (!value) {
      this._encryptedApiPublicKey = "";
    } else {
      this._encryptedApiPublicKey = this._encryption.Encrypt(value);
    }
  }
  get EncryptedApiKeyPassphrase(): string {
    return this._encryptedApiKeyPassphrase;
  }
  get EncryptedApiPrivateKey(): string {
    return this._encryptedApiPrivateKey;
  }
  get EncryptedApiPublicKey(): string {
    return this._encryptedApiPublicKey;
  }
}
export class ExchangeValidations {
  constructor(private readonly _exchange: Exchange) {
  }
  public get ApiVersion(): ValidationResult {
    const value = this._exchange.ApiVersion;
    const result = Validations.Required(value);
    return result;
  }
  public get ApiPublicKey(): ValidationResult {
    const value = this._exchange.EncryptedApiPublicKey;
    const result = Validations.Required(value);
    return result;
  }
  public get ApiPrivateKey(): ValidationResult {
    const value = this._exchange.EncryptedApiPrivateKey;
    const result = Validations.Required(value);
    return result;
  }
  public get ApiKeyPassphrase(): ValidationResult {
    const value = this._exchange.EncryptedApiKeyPassphrase;
    const result = Validations.Required(value);
    return result;
  }
}
