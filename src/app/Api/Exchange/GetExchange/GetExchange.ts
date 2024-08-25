import {GetExchangeResponse} from "./GetExchangeResponse";
import {HttpGetRequest} from "../../../Core/HttpGetRequest";

export class GetExchange extends HttpGetRequest<GetExchangeResponse> {
  constructor() {
    super("exchange/")
  }

  public async Get(userId: number): Promise<GetExchangeResponse> {
    if (!userId) {
      throw new Error("UserToken.UserId is null or undefined.")
    }
    const userIdString = userId.toString();
    return this.Send(userIdString);
  }

}
