import {GetExchangeResponse} from "./GetExchangeResponse";
import {HttpGetRequest} from "../../../Core/HttpGetRequest";

export class GetExchange extends HttpGetRequest<GetExchangeResponse> {
  constructor() {
    super("exchange/")
  }
}
