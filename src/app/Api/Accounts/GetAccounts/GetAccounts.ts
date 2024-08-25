import {HttpGetRequest} from "../../../Core/HttpGetRequest";
import {AccountsResource} from "../../../Resources/AccountsResource";
import {GetAccountsResponse} from "./GetAccountsResponse";

export class GetAccounts extends HttpGetRequest<GetAccountsResponse> {
  constructor() {
    super("accounts/")
  }
  public async Get(userId: number) : Promise<AccountsResource> {
    if (!userId) {
      throw new Error("Argument `userId` is null or undefined.");
    }
    const userIdString = userId.toString();
    const accounts = await this.Send(userIdString);
    return accounts;
  }
}
