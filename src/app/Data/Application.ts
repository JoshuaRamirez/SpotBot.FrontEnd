import {GetUserTokenResource} from "../Resources/Gets/GetUserTokenResource";
import {GetEncryptionKeyResource} from "../Resources/Gets/GetEncryptionKeyResource";
import {GetExchangeResource} from "../Resources/Gets/GetExchangeResource";

export class Application {
  static Application() {
    Application.UserToken = new GetUserTokenResource();
  }

  public static ExchangeSecrets: GetExchangeResource;
  public static UserToken: GetUserTokenResource;
  public static EncryptionKey: GetEncryptionKeyResource;

}
