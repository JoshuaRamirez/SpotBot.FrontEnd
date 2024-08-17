import {HttpPatchRequest} from "../../Core/HttpPatchRequest";
import {PatchExchangeRequest} from "./PatchExchangeRequest";

export class PatchExchange extends HttpPatchRequest<PatchExchangeRequest, never> {
  constructor() {
    super("exchange/")
  }
}
