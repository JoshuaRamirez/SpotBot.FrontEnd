import {HttpResourceApi} from "./Core/HttpResourceApi";

export class UserCredentialsApi extends HttpResourceApi {
  constructor() {
    super('user-credentials');
  }
}
