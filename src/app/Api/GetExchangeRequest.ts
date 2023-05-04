import {GetExchangeResource} from "../Resources/Gets/GetExchangeResource";
import {HttpGetRequest} from "./Core/HttpGetRequest";

export class GetExchangeRequest extends HttpGetRequest<GetExchangeResource> {
  constructor() {
    super("exchange/")
  }
}
