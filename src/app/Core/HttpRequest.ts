import { Subject } from 'rxjs';
import {HttpResourceApi} from './HttpResourceApi';

export abstract class HttpRequest<TResponse> extends HttpResourceApi {
  private readonly _uriBase: string;
  public readonly $Response: Subject<TResponse> = new Subject<TResponse>();

  protected constructor(uriBase: string) {
    super(uriBase);
    this._uriBase = uriBase;
  }

  protected get UriBase(): string {
    return this._uriBase;
  }

}
