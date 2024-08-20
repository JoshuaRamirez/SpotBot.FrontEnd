import {UserTokenResource} from "../Resources/UserTokenResource";
import {EncryptionKeyResource} from "../Resources/EncryptionKeyResource";
import {Orders} from "./Orders";
import { Exchange } from "./Exchange";

export class Application {
  public static Exchange: Exchange;
  public static UserToken: UserTokenResource = new UserTokenResource();
  public static EncryptionKey: EncryptionKeyResource;
  public static Orders: Orders = new Orders();
  public static GetUserId() : number {
    const userId = Application.UserToken.UserId;
    if (!userId) {
      throw new Error("UserToken.UserId is null or undefined.")
    }
    return userId;
  }
  public static NewGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    }).toUpperCase();
  }

}
