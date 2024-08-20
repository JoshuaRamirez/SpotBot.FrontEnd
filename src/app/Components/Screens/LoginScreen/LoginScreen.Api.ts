import {PostUserCredentials} from "../../../Api/UserCredentials/PostUserCredentials/PostUserCredentials";
import {GetEncryptionKey} from "../../../Api/EncryptionKey/GetEncryptionKey/GetEncryptionKey";
import {EncryptionKeyResource} from "../../../Resources/EncryptionKeyResource";
import {PostUserCredentialsRequest} from "../../../Api/UserCredentials/PostUserCredentials/PostUserCredentialsRequest";
import {UserTokenResource} from "../../../Resources/UserTokenResource";
import {LoginScreenBehaviors} from "./LoginScreen.Behaviors";

export class LoginScreenApi {
  private readonly _postUserCredentialsRequest: PostUserCredentials;
  private readonly _getEncryptionKeyRequest: GetEncryptionKey;
  constructor() {
    this._postUserCredentialsRequest = new PostUserCredentials();
    this._getEncryptionKeyRequest = new GetEncryptionKey();
  }
  public Behaviors: LoginScreenBehaviors | undefined;
  public async PostUserCredentials(resource: PostUserCredentialsRequest): Promise<UserTokenResource> {
    const getUserTokenResource = await this._postUserCredentialsRequest.Send(resource);
    return getUserTokenResource;
  }
  public async GetEncryptionKey(userId: number) : Promise<EncryptionKeyResource> {
    const userIdString = userId.toString();
    const resource = await this._getEncryptionKeyRequest.Send(userIdString);
    return resource;
  }

}
