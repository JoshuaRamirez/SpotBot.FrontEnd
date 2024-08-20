import {GetExchangeResponse} from "../../../Api/Exchange/GetExchange/GetExchangeResponse";
import {PostExchangeRequest} from "../../../Api/Exchange/PostExchange/PostExchangeRequest";
import {Encryption} from "../../../Core/Encryption";
import {AccountsResource} from "../../../Resources/AccountsResource";
import {ExchangeScreenApi} from "./ExchangeScreen.Api";
import {ExchangeScreenModel} from "./ExchangeScreen.Model";
import {Application} from "../../../Domain/Application";
import {IComponent} from "../../../Core/IComponent";

export class ExchangeScreenBehaviors {

  private readonly model: ExchangeScreenModel;
  private readonly _component: IComponent;
  private _api: ExchangeScreenApi;

  constructor(exchangeScreenData: ExchangeScreenModel, exchangeScreenApi: ExchangeScreenApi, component: IComponent) {
    this.model = exchangeScreenData;
    this._api = exchangeScreenApi;
    this._component = component;
  }
  public async Load() : Promise<void> {
    const userId = Application.GetUserId();
    const getExchangeResponse = await this._api.GetExchange(userId);
    this.updateModel(getExchangeResponse);
  }

  public async TestExchangeConnection() : Promise<void> {
    const userId = Application.GetUserId()
    let testResult = "Passed";
    let accountsResource: AccountsResource | null = null;
    try {
      //throw new Error("Test Error");
      accountsResource = await this._api.GetAccounts(userId)
    }
    catch (error) {
      if (error instanceof Error) {
        testResult = error.message;
      }
    }
    this.model.Tested = true;
    if (!accountsResource) {
      this.model.TestResult = false;
    } else {
      this.model.TestResult = true;
    }
    this.model.TestErrorResult = testResult;
    this._component.DetectChanges();
  }

  public async Save() : Promise<void> {
    const userId = Application.UserToken.UserId;
    if (!userId) {
      throw new Error("UserToken.UserId is null or undefined.")
    }
    const exchangeResource = this.buildPostExchangeRequestBody();
    if (!exchangeResource.Id) {
      await this._api.PostExchange(userId, exchangeResource);
    } else {
      await this._api.PatchExchange(userId, exchangeResource);
    }
  }

  private buildPostExchangeRequestBody() : PostExchangeRequest {
    if (!this.model.Exchange || this.model.Exchange.ApiVersion) {
      throw new Error("Exchange.ApiVersion is null or undefined.");
    }
    const postExchangeRequestBody = new PostExchangeRequest();
    postExchangeRequestBody.ApiKeyPassphrase = this.model.Exchange.EncryptedApiKeyPassphrase;
    postExchangeRequestBody.ApiPrivateKey = this.model.Exchange.EncryptedApiPrivateKey;
    postExchangeRequestBody.ApiPublicKey = this.model.Exchange.EncryptedApiPublicKey;
    postExchangeRequestBody.ApiVersion = this.model.Exchange.ApiVersion!.toString();
    postExchangeRequestBody.Id = this.model.Id;
    return postExchangeRequestBody;
  }

  private updateModel(getExchangeResponse: GetExchangeResponse) : void {
    if (!getExchangeResponse) {
      throw new Error("getExchangeResponse is null or undefined.");
    }
    if (!getExchangeResponse.ApiVersion) {
      throw new Error("getExchangeResponse.ApiVersion is null or undefined.");
    }
    if (!getExchangeResponse.ApiPrivateKey) {
      throw new Error("getExchangeResponse.ApiPrivateKey is null or undefined.");
    }
    if (!getExchangeResponse.ApiPublicKey) {
      throw new Error("getExchangeResponse.ApiPublicKey is null or undefined.");
    }
    if (!getExchangeResponse.ApiKeyPassphrase) {
      throw new Error("getExchangeResponse.ApiKeyPassphrase is null or undefined.");
    }
    if (!getExchangeResponse.Id) {
      throw new Error("getExchangeResponse.Id is null or undefined.");
    }
    if (!Application.EncryptionKey || !Application.EncryptionKey.Value) {
      throw new Error("Application.EncryptionKey is null or undefined.");
    }
    const encryption = new Encryption(Application.EncryptionKey.Value)
    this.model.Exchange.ApiKeyPassphrase = encryption.Decrypt(getExchangeResponse.ApiKeyPassphrase);
    this.model.Exchange.ApiPrivateKey = encryption.Decrypt(getExchangeResponse.ApiPrivateKey);
    this.model.Exchange.ApiPublicKey = encryption.Decrypt(getExchangeResponse.ApiPublicKey);
    this.model.Exchange.ApiVersion = getExchangeResponse.ApiVersion;
    this.model.Id = getExchangeResponse.Id;
    Application.Exchange = this.model.Exchange;
    this._component.DetectChanges();
  }
}


