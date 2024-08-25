import {PostUserCredentials} from "../../../Api/UserCredentials/PostUserCredentials/PostUserCredentials";
import {GetEncryptionKey} from "../../../Api/EncryptionKey/GetEncryptionKey/GetEncryptionKey";
import {EncryptionKeyResource} from "../../../Resources/EncryptionKeyResource";
import {PostUserCredentialsRequest} from "../../../Api/UserCredentials/PostUserCredentials/PostUserCredentialsRequest";
import {UserTokenResource} from "../../../Resources/UserTokenResource";
import {LoginScreenBehaviors} from "./LoginScreen.Behaviors";

export class LoginScreenApi {

  constructor() {

  }
  public Behaviors: LoginScreenBehaviors | undefined;
  public async PostUserCredentials(resource: PostUserCredentialsRequest): Promise<UserTokenResource> {
    const postUserCredentialsRequest = new PostUserCredentials();
    const getUserTokenResource = await postUserCredentialsRequest.Post(resource);
    return getUserTokenResource;
  }
  public async GetEncryptionKey(userId: number) : Promise<EncryptionKeyResource> {
    const getEncryptionKeyRequest = new GetEncryptionKey();
    const resource = await getEncryptionKeyRequest.Get(userId);
    return resource;
  }

}
