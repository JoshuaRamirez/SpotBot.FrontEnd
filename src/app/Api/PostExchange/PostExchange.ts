import {HttpPostRequest} from "../../Core/HttpPostRequest";
import {PostExchangeRequest} from "./PostExchangeRequest";

export class PostExchange extends HttpPostRequest<PostExchangeRequest, never> {
  constructor() {
    super("exchange/")
  }
}
