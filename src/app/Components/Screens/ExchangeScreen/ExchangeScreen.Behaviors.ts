import {GetExchangeResource} from "../../../Resources/Gets/GetExchangeResource";
import {ExchangeScreenData} from "./ExchangeScreen.Data";
import {PostExchangeResource} from "../../../Resources/Posts/PostExchangeResource";
import {Application} from "../../../Data/Application";
import {Encryption} from "../../../Core/Encryption";
import {IComponent} from "../../../Core/IComponent";

export class ExchangeScreenBehaviors {
  private readonly _data: ExchangeScreenData;
  private readonly _component: IComponent;
  constructor(exchangeScreenData: ExchangeScreenData, component: IComponent) {
    this._data = exchangeScreenData;
    this._component = component;
  }
  public UpdateDisplayedExchangeData(resource: GetExchangeResource) {
    const encryptionKey = Application.EncryptionKey.Value;
    if (!encryptionKey) {
      throw new Error("EncryptionKey.Value is null or undefined.")
    }
    const encryption = new Encryption(encryptionKey);
    const decryptedApiKeyPassphrase = encryption.Decrypt(resource.ApiKeyPassphrase);
    const decryptedApiPrivateKey = encryption.Decrypt(resource.ApiPrivateKey);
    const decryptedApiPublicKey = encryption.Decrypt(resource.ApiPublicKey);
    this._data.ApiKeyPassphrase = decryptedApiKeyPassphrase;
    this._data.ApiPrivateKey = decryptedApiPrivateKey;
    this._data.ApiPublicKey = decryptedApiPublicKey;
    this._data.ApiVersion = resource.ApiVersion;
    this._data.Id = resource.Id;
    Application.ExchangeSecrets = resource;
    this._component.DetectChanges();
  }

  public BuildPostExchangeResource() {
    const encryptionKey = Application.EncryptionKey.Value;
    if (!encryptionKey) {
      throw new Error("EncryptionKey.Value is null or undefined.")
    }
    const encryption = new Encryption(encryptionKey);
    const encryptedApiKeyPassphrase = encryption.Encrypt(this._data.ApiKeyPassphrase);
    const encryptedApiPrivateKey = encryption.Encrypt(this._data.ApiPrivateKey);
    const encryptedApiPublicKey = encryption.Encrypt(this._data.ApiPublicKey);
    const exchange = new PostExchangeResource();
    exchange.ApiKeyPassphrase = encryptedApiKeyPassphrase;
    exchange.ApiPrivateKey = encryptedApiPrivateKey;
    exchange.ApiPublicKey = encryptedApiPublicKey;
    exchange.ApiVersion = this._data.ApiVersion;
    exchange.Id = this._data.Id;
    return exchange;
  }

  public PassConnectionTest() {
    this._data.Tested = true;
    this._data.TestResult = true;
  }

}
