import {Encryption} from "../Core/Encryption";
import {Application} from "./Application";

export class Exchange {
  private readonly _encryption: Encryption;
  constructor() {
    const encryptionKey = Application.EncryptionKey.Value;
    if (!encryptionKey) {
      throw new Error("Application.EncryptionKey.Value is null or undefined.")
    }
    this._encryption = new Encryption(encryptionKey);
  }
  get ApiKeyPassphrase(): string {
    return this._encryption.Decrypt(this._encryptedApiKeyPassphrase);
  }
  set ApiKeyPassphrase(value: string) {
    this._encryptedApiKeyPassphrase = this._encryption.Encrypt(value);
  }
  get ApiPrivateKey(): string {
    return this._encryption.Decrypt(this._encryptedApiPrivateKey);
  }
  set ApiPrivateKey(value: string) {
    this._encryptedApiPrivateKey = this._encryption.Encrypt(value);
  }
  get ApiPublicKey(): string {
    return this._encryption.Decrypt(this._encryptedApiPublicKey);
  }
  set ApiPublicKey(value: string) {
    this._encryptedApiPublicKey = this._encryption.Encrypt(value);
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
  private _encryptedApiPublicKey: string = "";
  private _encryptedApiPrivateKey: string = "";
  private _encryptedApiKeyPassphrase: string = "";
  public ApiVersion?: string;
}
