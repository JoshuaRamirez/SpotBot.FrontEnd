import {GetExchange} from "../../../Api/GetExchange/GetExchange";
import {PostExchange} from "../../../Api/PostExchange/PostExchange";
import {PatchExchange} from "../../../Api/PatchExchange/PatchExchange";
import {Application} from "../../../Data/Application";
import {GetExchangeResponse} from "../../../Api/GetExchange/GetExchangeResponse";
import {ExchangeScreenBehaviors} from "./ExchangeScreen.Behaviors";
import {GetAccounts} from "../../../Api/GetAccounts/GetAccounts";
import {AccountsResource} from "../../../Resources/AccountsResource";

export class ExchangeScreenApi {
  private readonly _getExchange: GetExchange;
  private readonly _postExchange: PostExchange;
  private readonly _patchExchange: PatchExchange;
  private readonly _getAccounts: GetAccounts;
  private readonly _behaviors: ExchangeScreenBehaviors;

  constructor(behaviors: ExchangeScreenBehaviors) {
    this._behaviors = behaviors;
    this._getExchange = new GetExchange();
    this._postExchange = new PostExchange();
    this._patchExchange = new PatchExchange();
    this._getAccounts = new GetAccounts();
    this._getExchange.$Response.subscribe(this.exchangeReceived.bind(this));
    this._postExchange.$Response.subscribe(this.saveSucceeded.bind(this));
    this._patchExchange.$Response.subscribe(this.saveSucceeded.bind(this));
    this._getAccounts.$Response.subscribe(this.whenAccountsReceived.bind(this));
  }

  public Load(): void {
    const userId = Application.UserToken.UserId;
    if (!userId) {
      throw new Error("UserToken.UserId is null or undefined.")
    }
    const userIdString = userId.toString();
    this._getExchange.Send(userIdString);
  }

  public Save(): void {
    const resource = this._behaviors.BuildPostExchangeResource();
    const userId = Application.UserToken.UserId;
    if (!userId) {
      throw new Error("UserToken.UserId is null or undefined.")
    }
    const userIdString = userId.toString();
    if (resource.Id) {
      this._patchExchange.Send(resource, userIdString);
    } else {
      this._postExchange.Send(resource, userIdString);
    }
  }

  public TestExchangeConnection() {
    const userId = Application.UserToken.UserId;
    if (!userId) {
      throw new Error("UserToken.UserId is null or undefined.")
    }
    const userIdString = userId.toString();
    this._getAccounts.Send(userIdString);
  }

  private exchangeReceived(exchange: GetExchangeResponse) {
    this._behaviors.UpdateDisplayedExchangeData(exchange);
  }

  private saveSucceeded() {
    this.Load();
  }

  private whenAccountsReceived(resource: AccountsResource) {
    this._behaviors.PassConnectionTest();
  }
}
