import {PostUserCredentialsRequest} from "../../../Api/PostUserCredentialsRequest";
import {GetUserTokenResource} from "../../../Resources/Gets/GetUserTokenResource";
import {GetEncryptionKeyRequest} from "../../../Api/GetEncryptionKeyRequest";
import {GetEncryptionKeyResource} from "../../../Resources/Gets/GetEncryptionKeyResource";
import {Application} from "../../../Data/Application";
import {LoginScreenService} from "./LoginScreen.Service";
import {NavigationService} from "../../../Services/NavigationService";

export class LoginScreenApi {
  private readonly _service: LoginScreenService;
  private readonly _postUserCredentialsRequest: PostUserCredentialsRequest;
  private readonly _getEncryptionKeyRequest: GetEncryptionKeyRequest;

  constructor(service: LoginScreenService) {
    this._service = service;
    this._postUserCredentialsRequest = new PostUserCredentialsRequest();
    this._getEncryptionKeyRequest = new GetEncryptionKeyRequest();
    this._postUserCredentialsRequest.$Response.subscribe(this.whenUserTokenResourceReceived.bind(this));
    this._getEncryptionKeyRequest.$Response.subscribe(this.whenEncryptionKeyReceived.bind(this));
  }
  public Login(): void {
    const resource = this._service.BuildPostUserCredentialsResource();
    this._postUserCredentialsRequest.Send(resource);
  }
  public whenUserTokenResourceReceived(userToken: GetUserTokenResource) {
    this._service.WhenUserTokenResourceReceived(userToken);
    const userId = Application.UserToken.UserId;
    this.getEncryptionKey(userId);
  }

  private getEncryptionKey(userId: number) : void {
    const userIdString = userId.toString();
    this._getEncryptionKeyRequest.Send(userIdString);
  }

  private whenEncryptionKeyReceived(resource: GetEncryptionKeyResource) {
    this._service.WhenEncryptionKeyReceived(resource);
    NavigationService.NavigateToExchangeScreen();
  }

}
