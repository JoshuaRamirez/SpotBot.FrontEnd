import {GetExchangeRequest} from "../../../Api/GetExchangeRequest";
import {PostExchangeRequest} from "../../../Api/PostExchangeRequest";
import {PatchExchangeRequest} from "../../../Api/PatchExchangeRequest";
import {Application} from "../../../Data/Application";
import {GetExchangeResource} from "../../../Resources/Gets/GetExchangeResource";
import {ExchangeScreenService} from "./ExchangeScreen.Service";
import {GetAccountsRequest} from "../../../Api/GetAccountsRequest";
import {GetAccountsResource} from "../../../Resources/Gets/GetAccountsResource";

export class ExchangeScreenApi {
  private readonly _getExchangeRequest: GetExchangeRequest;
  private readonly _postExchangeRequest: PostExchangeRequest;
  private readonly _patchExchangeRequest: PatchExchangeRequest;
  private readonly _service: ExchangeScreenService;
  private readonly _getAccountsRequest: GetAccountsRequest;

  constructor(exchangeScreenService: ExchangeScreenService) {
    this._service = exchangeScreenService;
    this._getExchangeRequest = new GetExchangeRequest();
    this._postExchangeRequest = new PostExchangeRequest();
    this._patchExchangeRequest = new PatchExchangeRequest();
    this._getAccountsRequest = new GetAccountsRequest();
    this._getExchangeRequest.$Response.subscribe(this.exchangeReceived.bind(this));
    this._postExchangeRequest.$Response.subscribe(this.saveSucceeded.bind(this));
    this._patchExchangeRequest.$Response.subscribe(this.saveSucceeded.bind(this));
    this._getAccountsRequest.$Response.subscribe(this.whenAccountsReceived.bind(this));
  }

  public Load(): void {
    const userId = Application.UserToken.UserId;
    if (!userId) {
      throw new Error("UserToken.UserId is null or undefined.")
    }
    const userIdString = userId.toString();
    this._getExchangeRequest.Send(userIdString);
  }

  public Save(): void {
    const resource = this._service.BuildPostExchangeResource();
    const userId = Application.UserToken.UserId;
    if (!userId) {
      throw new Error("UserToken.UserId is null or undefined.")
    }
    const userIdString = userId.toString();
    if (resource.Id) {
      this._patchExchangeRequest.Send(resource, userIdString);
    } else {
      this._postExchangeRequest.Send(resource, userIdString);
    }
  }

  TestExchangeConnection() {
    const userId = Application.UserToken.UserId;
    if (!userId) {
      throw new Error("UserToken.UserId is null or undefined.")
    }
    const userIdString = userId.toString();
    this._getAccountsRequest.Send(userIdString);
  }

  private exchangeReceived(exchange: GetExchangeResource) {
    this._service.WhenExchangeResourceReceived(exchange);
  }

  private saveSucceeded() {
    this.Load();
  }

  private whenAccountsReceived(resource: GetAccountsResource) {
    this._service.WhenExchangeConnectionTestPassed();
  }
}
