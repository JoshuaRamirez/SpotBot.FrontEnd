import {UserTokenResource} from "../Resources/UserTokenResource";
import {EncryptionKeyResource} from "../Resources/EncryptionKeyResource";
import {GetExchangeResponse} from "../Api/GetExchange/GetExchangeResponse";
import {Orders} from "./Orders";

export class Application {

  public static ExchangeSecrets: GetExchangeResponse;
  public static UserToken: UserTokenResource = new UserTokenResource();
  public static EncryptionKey: EncryptionKeyResource;
  public static Orders: Orders = new Orders();

  public static NewGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    }).toUpperCase();
  }

}
