import {LocalStorageService} from "../../../Services/LocalStorageService";
import {GetEncryptionKeyResource} from "../../../Resources/Gets/GetEncryptionKeyResource";
import {LoginScreenData} from "./LoginScreen.Data";
import {PostUserCredentialsResource} from "../../../Resources/Posts/PostUserCredentialsResource";
import {GetUserTokenResource} from "../../../Resources/Gets/GetUserTokenResource";
import {Obfuscation} from "../../../Core/Obfuscation";
import {NavigationService} from "../../../Services/NavigationService";

export class LoginScreenBehaviors {
  private readonly _data: LoginScreenData;
  constructor(loginScreenData: LoginScreenData) {
    this._data = loginScreenData;
  }
  public WhenEncryptionKeyReceived(encryptionKey: GetEncryptionKeyResource) {
    encryptionKey.Value = Obfuscation.Deobfuscate(encryptionKey.Value);
    LocalStorageService.StoreEncryptionKey(encryptionKey);
    NavigationService.NavigateToExchangeScreen();
  }

  public BuildPostUserCredentialsResource() {
    const resource = new PostUserCredentialsResource();
    resource.UserName = this._data.UserName;
    resource.Password = this._data.Password;
    return resource;
  }

  public WhenUserTokenResourceReceived(userToken: GetUserTokenResource) {
    const userId = userToken.UserId;
    if (!userId) {
      throw new Error("UserToken.UserId is null or undefined.")
    }
    LocalStorageService.StoreUserToken(userToken);
  }

}
