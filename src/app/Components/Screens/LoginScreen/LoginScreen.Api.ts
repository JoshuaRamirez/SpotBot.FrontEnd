import {PostUserCredentialsRequest} from "../../../Api/PostUserCredentialsRequest";
import {GetEncryptionKeyRequest} from "../../../Api/GetEncryptionKeyRequest";
import {GetEncryptionKeyResource} from "../../../Resources/Gets/GetEncryptionKeyResource";
import {GetUserTokenResource} from "../../../Resources/Gets/GetUserTokenResource";
import {PostUserCredentialsResource} from "../../../Resources/Posts/PostUserCredentialsResource";
import {LoginScreenBehaviors} from "./LoginScreen.Behaviors";

export class LoginScreenApi {
  private readonly _postUserCredentialsRequest: PostUserCredentialsRequest;
  private readonly _getEncryptionKeyRequest: GetEncryptionKeyRequest;
  constructor() {
    this._postUserCredentialsRequest = new PostUserCredentialsRequest();
    this._getEncryptionKeyRequest = new GetEncryptionKeyRequest();
  }
  public Behaviors: LoginScreenBehaviors | undefined;
  public async PostUserCredentials(resource: PostUserCredentialsResource): Promise<GetUserTokenResource> {
    const getUserTokenResource = await this._postUserCredentialsRequest.Send(resource);
    return getUserTokenResource;
  }
  public async GetEncryptionKey(userId: number) : Promise<GetEncryptionKeyResource> {
    const userIdString = userId.toString();
    const resource = await this._getEncryptionKeyRequest.Send(userIdString);
    return resource;
  }

}
