import {HttpGetRequest} from "../../Core/HttpGetRequest";
import {GetEncryptionKeyResponse} from "./GetEncryptionKeyResponse";

export class GetEncryptionKey extends HttpGetRequest<GetEncryptionKeyResponse> {
  constructor() {
    super("encryption-key/")
  }
}
