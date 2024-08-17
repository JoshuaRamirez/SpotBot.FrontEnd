import {GetExchange} from "../../../Api/GetExchange/GetExchange";
import {PostExchange} from "../../../Api/PostExchange/PostExchange";
import {PatchExchange} from "../../../Api/PatchExchange/PatchExchange";
import {Application} from "../../../Data/Application";
import {AccountsResource} from "../../../Resources/AccountsResource";
import {ExchangeResource} from "../../../Resources/ExchangeResource";
import {GetAccounts} from "../../../Api/GetAccounts/GetAccounts";

export class ExchangeScreenApi {

  public async GetExchange(userId: number): Promise<ExchangeResource> {
    if (!userId) {
      throw new Error("UserToken.UserId is null or undefined.")
    }
    const userIdString = userId.toString();
    const getExchange = new GetExchange();
    return getExchange.Send(userIdString);
  }

  public async PatchExchange(userId: number, resource: ExchangeResource): Promise<void> {
    if (!resource) {
      throw new Error("Argument `resource` is null or undefined.");
    }
    if (!resource.Id) {
      throw new Error("Argument `resource.Id` is null or undefined.");
    }
    if (!userId) {
      throw new Error("Argument `userId` is null or undefined.");
    }
    const userIdString = userId.toString();

    const patchExchange = new PatchExchange();
    await patchExchange.Send(resource, userIdString);
  }

  public async PostExchange(userId: number, resource: ExchangeResource): Promise<void> {
    if (!resource) {
      throw new Error("Argument `resource` is null or undefined.");
    }
    if (!userId) {
      throw new Error("Argument `userId` is null or undefined.");
    }
    const userIdString = userId.toString();
    const postExchange = new PostExchange();
    await postExchange.Send(resource, userIdString);
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
