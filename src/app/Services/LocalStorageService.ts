import {UserTokenResource} from "../Resources/UserTokenResource";
import {Application} from "../Domain/Application";
import {EncryptionKeyResource} from "../Resources/EncryptionKeyResource";

export class LocalStorageService {
  public static StoreUserToken(userToken: UserTokenResource) {
    localStorage.setItem('UserToken', JSON.stringify(userToken));
    Application.UserToken = userToken;
  }
  public static GetUserToken(): UserTokenResource | undefined {
    let userToken: UserTokenResource | undefined = undefined;
    const userTokenString = localStorage.getItem('UserToken');
    if (userTokenString) {
      userToken = JSON.parse(userTokenString);
      if (userToken) {
        Application.UserToken = userToken;
      }
    }
    return userToken;
  }
  public static StoreEncryptionKey(encryptionKey: EncryptionKeyResource): void {
    const value = JSON.stringify(encryptionKey);
    localStorage.setItem('EncryptionKey', value);
    Application.EncryptionKey = encryptionKey;
  }
  public static GetEncryptionKey(): EncryptionKeyResource {
    let encryptionKey = new EncryptionKeyResource()
    const encryptionKeyString = localStorage.getItem('EncryptionKey');
    if (encryptionKeyString) {
      encryptionKey = JSON.parse(encryptionKeyString);
    }
    Application.EncryptionKey = encryptionKey;
    return encryptionKey;
  }

}
