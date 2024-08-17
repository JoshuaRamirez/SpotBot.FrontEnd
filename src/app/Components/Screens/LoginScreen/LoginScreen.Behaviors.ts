import {Application} from "../../../Data/Application";
import {GetUserTokenResource} from "../../../Resources/Gets/GetUserTokenResource";
import {LocalStorageService} from "../../../Services/LocalStorageService";
import {GetEncryptionKeyResource} from "../../../Resources/Gets/GetEncryptionKeyResource";
import {LoginScreenApi} from "./LoginScreen.Api";
import {LoginScreenData} from "./LoginScreen.Data";
import {PostUserCredentialsResource} from "../../../Resources/Posts/PostUserCredentialsResource";
import {Obfuscation} from "../../../Core/Obfuscation";
import {NavigationService} from "../../../Services/NavigationService";

export class LoginScreenBehaviors {
  private readonly _data: LoginScreenData;
  private readonly _api: LoginScreenApi;
  constructor(loginScreenData: LoginScreenData, api: LoginScreenApi) {
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

  private async initializeLogin(): Promise<GetUserTokenResource> {
    const resource = new PostUserCredentialsResource();
    resource.UserName = this._data.UserName;
    resource.Password = this._data.Password;
    const userToken = await this._api.PostUserCredentials(resource);
    return userToken;
  }
  private storeEncryptionKey(encryptionKey: GetEncryptionKeyResource) {
    encryptionKey.Value = Obfuscation.Deobfuscate(encryptionKey.Value);
    LocalStorageService.StoreEncryptionKey(encryptionKey);
  }

  private storeUserToken(userToken: GetUserTokenResource) {
    const userId = userToken.UserId;
    if (!userId) {
      throw new Error("UserToken.UserId is null or undefined.")
    }
    LocalStorageService.StoreUserToken(userToken);
  }

}
