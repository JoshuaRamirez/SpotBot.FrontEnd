import {GetUserTokenResource} from "../Resources/Gets/GetUserTokenResource";
import {GetEncryptionKeyResource} from "../Resources/Gets/GetEncryptionKeyResource";
import {GetExchangeResource} from "../Resources/Gets/GetExchangeResource";
import {Orders} from "./Orders";

export class Application {

  public static ExchangeSecrets: GetExchangeResource;
  public static UserToken: GetUserTokenResource = new GetUserTokenResource();
  public static EncryptionKey: GetEncryptionKeyResource;
  public static Orders: Orders = new Orders();

  public static NewGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    }).toUpperCase();
  }

}
