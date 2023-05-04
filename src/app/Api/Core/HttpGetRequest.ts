import {HttpVerb} from './HttpResourceApi';
import {HttpRequest} from "./HttpRequest";

export abstract class HttpGetRequest<TResponse> extends HttpRequest<TResponse> {
  protected constructor(uriBase: string) {
    super(uriBase);
  }

  public Send(uriAddendum?: string): void {
    const responsePromise = this.SendRequest<never, TResponse>(HttpVerb.Get, undefined, uriAddendum);
    responsePromise.then((response) => {
      this.$Response.next(response);
    }).catch((error) => {
      //this.$Response.error(error);
    });
  }
}
