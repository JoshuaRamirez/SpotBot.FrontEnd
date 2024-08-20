import {GetExchange} from "../../../Api/Exchange/GetExchange/GetExchange";
import {GetExchangeResponse} from "../../../Api/Exchange/GetExchange/GetExchangeResponse";
import {PatchExchangeRequest} from "../../../Api/Exchange/PatchExchange/PatchExchangeRequest";
import {PostExchange} from "../../../Api/Exchange/PostExchange/PostExchange";
import {PatchExchange} from "../../../Api/Exchange/PatchExchange/PatchExchange";
import {PostExchangeRequest} from "../../../Api/Exchange/PostExchange/PostExchangeRequest";
import {AccountsResource} from "../../../Resources/AccountsResource";
import {GetAccounts} from "../../../Api/Accounts/GetAccounts/GetAccounts";

export class ExchangeScreenApi {

  public async GetExchange(userId: number): Promise<GetExchangeResponse> {
    if (!userId) {
      throw new Error("UserToken.UserId is null or undefined.")
    }
    const userIdString = userId.toString();
    const getExchange = new GetExchange();
    return getExchange.Send(userIdString);
  }

  public async PatchExchange(userId: number, body: PatchExchangeRequest): Promise<void> {
    if (!body) {
      throw new Error("Argument `resource` is null or undefined.");
    }
    if (!body.Id) {
      throw new Error("Argument `resource.Id` is null or undefined.");
    }
    if (!userId) {
      throw new Error("Argument `userId` is null or undefined.");
    }
    const userIdString = userId.toString();

    const patchExchange = new PatchExchange();
    await patchExchange.Send(body, userIdString);
  }

  public async PostExchange(userId: number, postExchangeRequest: PostExchangeRequest): Promise<void> {
    if (!postExchangeRequest) {
      throw new Error("Argument `resource` is null or undefined.");
    }
    if (!userId) {
      throw new Error("Argument `userId` is null or undefined.");
    }
    const userIdString = userId.toString();
    const postExchange = new PostExchange();
    await postExchange.Send(postExchangeRequest, userIdString);
  }

  public async GetAccounts(userId: number) : Promise<AccountsResource> {
    if (!userId) {
      throw new Error("Argument `userId` is null or undefined.");
    }
    const userIdString = userId.toString();
    const getAccounts = new GetAccounts();
    const accounts = await getAccounts.Send(userIdString);
    return accounts;
  }
}
