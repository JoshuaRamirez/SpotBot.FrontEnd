import {HttpGetRequest} from "../../../Core/HttpGetRequest";
import {GetAccountsResponse} from "./GetAccountsResponse";

export class GetAccounts extends HttpGetRequest<GetAccountsResponse> {
  constructor() {
    super("accounts/")
  }
}
