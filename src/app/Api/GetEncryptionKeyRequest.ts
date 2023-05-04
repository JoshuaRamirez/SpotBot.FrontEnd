import {HttpGetRequest} from "./Core/HttpGetRequest";
import {GetEncryptionKeyResource} from "../Resources/Gets/GetEncryptionKeyResource";

export class GetEncryptionKeyRequest extends HttpGetRequest<GetEncryptionKeyResource> {
  constructor() {
    super("encryption-key/")
  }
}
