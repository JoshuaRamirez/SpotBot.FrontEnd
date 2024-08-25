import {HttpPatchRequest} from "../../../Core/HttpPatchRequest";
import {PatchExchangeRequest} from "./PatchExchangeRequest";

export class PatchExchange extends HttpPatchRequest<PatchExchangeRequest, never> {
  constructor() {
    super("exchange/")
  }

  public async Patch(userId: number, body: PatchExchangeRequest): Promise<void> {
    if (!body) {
      throw new Error("Argument `resource` is null or undefined.");
    }
    if (!body.Id) {
      throw new Error("Argument `resource.Id` is null or undefined.");
    }
    if (!userId) {
      throw new Error("Argument `userId` is null or undefined.");
    }
    const userIdString = userId.toString();
    await this.Send(body, userIdString);
  }

}
