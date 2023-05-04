import {HttpPostRequest} from "./Core/HttpPostRequest";
import {PostUserCredentialsResource} from "../Resources/Posts/PostUserCredentialsResource";
import {GetUserTokenResource} from "../Resources/Gets/GetUserTokenResource";

export class PostUserCredentialsRequest extends HttpPostRequest<PostUserCredentialsResource, GetUserTokenResource> {
  constructor() {
    super("user-credentials/")
  }
}
