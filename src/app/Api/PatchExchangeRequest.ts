import {HttpPatchRequest} from "./Core/HttpPatchRequest";
import {PostExchangeResource} from "../Resources/Posts/PostExchangeResource";

export class PatchExchangeRequest extends HttpPatchRequest<PostExchangeResource, never> {
  constructor() {
    super("exchange/")
  }
}
