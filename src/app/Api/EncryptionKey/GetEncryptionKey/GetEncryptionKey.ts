import {HttpGetRequest} from "../../../Core/HttpGetRequest";
import {EncryptionKeyResource} from "../../../Resources/EncryptionKeyResource";
import {GetEncryptionKeyResponse} from "./GetEncryptionKeyResponse";

export class GetEncryptionKey extends HttpGetRequest<GetEncryptionKeyResponse> {
  constructor() {
    super("encryption-key/")
  }

  public async Get(userId: number) : Promise<EncryptionKeyResource> {
    const userIdString = userId.toString();
    const resource = await this.Send(userIdString);
    return resource;
  }

}
