import {Application} from "../../../Domain/Application";
import {UserTokenResource} from "../../../Resources/UserTokenResource";
import {LocalStorageService} from "../../../Services/LocalStorageService";
import {EncryptionKeyResource} from "../../../Resources/EncryptionKeyResource";
import {LoginScreenApi} from "./LoginScreen.Api";
import {LoginScreenModel} from "./LoginScreen.Model";
import {PostUserCredentialsRequest} from "../../../Api/UserCredentials/PostUserCredentials/PostUserCredentialsRequest";
import {Obfuscation} from "../../../Core/Obfuscation";
import {NavigationService} from "../../../Services/NavigationService";

export class LoginScreenBehaviors {
  private readonly _data: LoginScreenModel;
  private readonly _api: LoginScreenApi;
  constructor(loginScreenData: LoginScreenModel, api: LoginScreenApi) {
    this._data = loginScreenData;
    this._api = api;
  }

  public async Login(): Promise<void> {
    const userToken = await this.initializeLogin();
    this.storeUserToken(userToken);
    const userId = Application.UserToken.UserId;
    const encryptionKey = await this._api.GetEncryptionKey(userId);
    this.storeEncryptionKey(encryptionKey);
    await NavigationService.NavigateToExchangeScreen();
  }

  private async initializeLogin(): Promise<UserTokenResource> {
    const resource = new PostUserCredentialsRequest();
    resource.UserName = this._data.UserName;
    resource.Password = this._data.Password;
    const userToken = await this._api.PostUserCredentials(resource);
    return userToken;
  }
  private storeEncryptionKey(encryptionKey: EncryptionKeyResource) {
    encryptionKey.Value = Obfuscation.Deobfuscate(encryptionKey.Value);
    LocalStorageService.StoreEncryptionKey(encryptionKey);
  }

  private storeUserToken(userToken: UserTokenResource) {
    const userId = userToken.UserId;
    if (!userId) {
      throw new Error("UserToken.UserId is null or undefined.")
    }
    LocalStorageService.StoreUserToken(userToken);
  }

}
