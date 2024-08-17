import {AccountsResource} from "../../../Resources/AccountsResource";
import {ExchangeResource} from "../../../Resources/ExchangeResource";
import {ExchangeScreenApi} from "./ExchangeScreen.Api";
import {ExchangeScreenData} from "./ExchangeScreen.Data";
import {Application} from "../../../Data/Application";
import {Encryption} from "../../../Core/Encryption";
import {IComponent} from "../../../Core/IComponent";

export class ExchangeScreenBehaviors {

  private readonly _data: ExchangeScreenData;
  private readonly _component: IComponent;
  private _api: ExchangeScreenApi;

  constructor(exchangeScreenData: ExchangeScreenData, exchangeScreenApi: ExchangeScreenApi, component: IComponent) {
    this._data = exchangeScreenData;
    this._api = exchangeScreenApi;
    this._component = component;
  }
  public async Load() : Promise<void> {
    const userId = Application.GetUserId();
    const exchangeResource = await this._api.GetExchange(userId);
    this.updateModel(exchangeResource);
  }

  public async TestExchangeConnection() : Promise<void> {
    const userId = Application.GetUserId()
    let testResult = "Passed";
    let accountsResource: AccountsResource | null = null;
    try {
      throw new Error("asdf");
      accountsResource = await this._api.GetAccounts(userId)
    }
    catch (error) {
      if (error instanceof Error) {
        testResult = error.message;
      }
    }
    this._data.Tested = true;
    if (!accountsResource) {
      this._data.TestResult = false;
    } else {
      this._data.TestResult = true;
    }
    this._data.TestErrorResult = testResult;
    this._component.DetectChanges();
  }

  public async Save() : Promise<void> {
    const userId = Application.UserToken.UserId;
    if (!userId) {
      throw new Error("UserToken.UserId is null or undefined.")
    }
    const exchangeResource = this.buildExchangeResource();
    if (!exchangeResource.Id) {
      await this._api.PostExchange(userId, exchangeResource);
    } else {
      await this._api.PatchExchange(userId, exchangeResource);
    }
  }

  private buildExchangeResource() : ExchangeResource {
    const encryptedSettings = new EncryptedSettings(this._data);
    const exchange = new ExchangeResource();
    exchange.ApiKeyPassphrase = encryptedSettings.KeyPassphrase;
    exchange.ApiPrivateKey = encryptedSettings.PrivateKey;
    exchange.ApiPublicKey = encryptedSettings.PublicKey;
    exchange.ApiVersion = this._data.ApiVersion;
    exchange.Id = this._data.Id;
    return exchange;
  }

  private updateModel(exchangeResource: ExchangeResource) : void {
    const encryptedSettings = new EncryptedSettings(this._data);
    this._data.ApiKeyPassphrase = encryptedSettings.KeyPassphrase;
    this._data.ApiPrivateKey = encryptedSettings.PrivateKey;
    this._data.ApiPublicKey = encryptedSettings.PublicKey;
    this._data.ApiVersion = exchangeResource.ApiVersion;
    this._data.Id = exchangeResource.Id;
    Application.Exchange = exchangeResource;
    this._component.DetectChanges();
  }
}

class EncryptedSettings {
  public KeyPassphrase: string;
  public PrivateKey: string;
  public PublicKey: string;
  constructor(private readonly data: ExchangeScreenData) {
    const encryptionKey = Application.EncryptionKey.Value;
    if (!encryptionKey) {
      throw new Error("EncryptionKey.Value is null or undefined.")
    }
    const encryption = new Encryption(encryptionKey);
    this.KeyPassphrase = encryption.Encrypt(data.ApiKeyPassphrase);
    this.PrivateKey = encryption.Encrypt(data.ApiPrivateKey);
    this.PublicKey = encryption.Encrypt(data.ApiPublicKey);
  }
}
