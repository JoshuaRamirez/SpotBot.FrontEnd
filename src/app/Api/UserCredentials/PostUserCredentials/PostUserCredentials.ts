import {HttpPostRequest} from "../../../Core/HttpPostRequest";
import {PostUserCredentialsRequest} from "./PostUserCredentialsRequest";
import {UserTokenResource} from "../../../Resources/UserTokenResource";

export class PostUserCredentials extends HttpPostRequest<PostUserCredentialsRequest, UserTokenResource> {
  constructor() {
    super("user-credentials/")
  }

  public async Post(resource: PostUserCredentialsRequest): Promise<UserTokenResource> {

    if (!resource) {
      throw new Error("Resource cannot be null or undefined.");
    }

    if (typeof resource !== "object") {
      throw new Error("Resource must be an object.");
    }

    if (!resource.UserName || typeof resource.UserName !== "string" || resource.UserName.trim() === "") {
      throw new Error("Invalid or missing username in the resource.");
    }

    if (!resource.Password || typeof resource.Password !== "string" || resource.Password.trim() === "") {
      throw new Error("Invalid or missing password in the resource.");
    }

    let getUserTokenResource: UserTokenResource;

    getUserTokenResource = await this.Send(resource);

    // Check if the response is valid
    if (!getUserTokenResource || typeof getUserTokenResource !== "object") {
      throw new Error("Invalid response received from Send method.");
    }

    return getUserTokenResource;
  }

}
