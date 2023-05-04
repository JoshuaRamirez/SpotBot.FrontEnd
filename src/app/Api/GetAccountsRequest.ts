import {HttpGetRequest} from "./Core/HttpGetRequest";
import {GetAccountsResource} from "../Resources/Gets/GetAccountsResource";

export class GetAccountsRequest extends HttpGetRequest<GetAccountsResource> {
  constructor() {
    super("accounts/")
  }
}
