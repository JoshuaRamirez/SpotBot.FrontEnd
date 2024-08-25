import {HttpVerb} from './HttpResourceApi';
import {HttpRequest} from "./HttpRequest";

export abstract class HttpGetRequest<TResponse> extends HttpRequest<TResponse> {
  protected constructor(uriBase: string) {
    super(uriBase);
  }

  protected Send(uriAddendum?: string): Promise<TResponse> {
    const responsePromise = this.SendRequest<never, TResponse>(HttpVerb.Get, undefined, uriAddendum);
    responsePromise.then((response) => {
      this.$Response.next(response);
    }).catch((error) => {
      //this.$Response.error(error);
    });
    return responsePromise;
  }
}
