import {HttpPostRequest} from "../../Core/HttpPostRequest";
import {PostUserCredentialsRequest} from "./PostUserCredentialsRequest";
import {UserTokenResource} from "../../Resources/UserTokenResource";

export class PostUserCredentials extends HttpPostRequest<PostUserCredentialsRequest, UserTokenResource> {
  constructor() {
    super("user-credentials/")
  }
}
