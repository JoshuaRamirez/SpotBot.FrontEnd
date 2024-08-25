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
    const getExchange = new GetExchange();
    return getExchange.Get(userId);
  }

  public async PatchExchange(userId: number, body: PatchExchangeRequest): Promise<void> {
    const patchExchange = new PatchExchange();
    await patchExchange.Patch(userId, body);
  }

  public async PostExchange(userId: number, postExchangeRequest: PostExchangeRequest): Promise<void> {
    const postExchange = new PostExchange();
    await postExchange.Post(userId, postExchangeRequest);
  }

  public async GetAccounts(userId: number) : Promise<AccountsResource> {
    const getAccounts = new GetAccounts();
    const accounts = await getAccounts.Get(userId);
    return accounts;
  }
}
