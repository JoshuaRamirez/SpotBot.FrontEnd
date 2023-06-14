import {GetUserTokenResource} from "../Resources/Gets/GetUserTokenResource";
import {Application} from "../Data/Application";
import {GetEncryptionKeyResource} from "../Resources/Gets/GetEncryptionKeyResource";

export class LocalStorageService {
  public static StoreUserToken(userToken: GetUserTokenResource) {
    localStorage.setItem('UserToken', JSON.stringify(userToken));
    Application.UserToken = userToken;
  }
  public static GetUserToken(): GetUserTokenResource | undefined {
    let userToken: GetUserTokenResource | undefined = undefined;
    const userTokenString = localStorage.getItem('UserToken');
    if (userTokenString) {
      userToken = JSON.parse(userTokenString);
      if (userToken) {
        Application.UserToken = userToken;
      }
    }
    return userToken;
  }
  public static StoreEncryptionKey(encryptionKey: GetEncryptionKeyResource): void {
    const value = JSON.stringify(encryptionKey);
    localStorage.setItem('EncryptionKey', value);
    Application.EncryptionKey = encryptionKey;
  }
  public static GetEncryptionKey(): GetEncryptionKeyResource {
    let encryptionKey = new GetEncryptionKeyResource()
    const encryptionKeyString = localStorage.getItem('EncryptionKey');
    if (encryptionKeyString) {
      encryptionKey = JSON.parse(encryptionKeyString);
    }
    Application.EncryptionKey = encryptionKey;
    return encryptionKey;
  }

}
