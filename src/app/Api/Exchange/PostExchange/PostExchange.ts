import {HttpPostRequest} from "../../../Core/HttpPostRequest";
import {PostExchangeRequest} from "./PostExchangeRequest";

export class PostExchange extends HttpPostRequest<PostExchangeRequest, never> {
  constructor() {
    super("exchange/")
  }

  public async Post(userId: number, postExchangeRequest: PostExchangeRequest): Promise<void> {
    if (!postExchangeRequest) {
      throw new Error("Argument `resource` is null or undefined.");
    }
    if (!userId) {
      throw new Error("Argument `userId` is null or undefined.");
    }
    const userIdString = userId.toString();
    await this.Send(postExchangeRequest, userIdString);
  }

}
