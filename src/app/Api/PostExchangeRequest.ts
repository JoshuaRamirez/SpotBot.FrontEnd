import {PostExchangeResource} from "../Resources/Posts/PostExchangeResource";
import {HttpPostRequest} from "./Core/HttpPostRequest";

export class PostExchangeRequest extends HttpPostRequest<PostExchangeResource, never> {
  constructor() {
    super("exchange/")
  }
}
