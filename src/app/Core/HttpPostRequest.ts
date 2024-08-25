import {HttpVerb} from './HttpResourceApi';
import {HttpRequest} from "./HttpRequest";

export abstract class HttpPostRequest<TRequest, TResponse> extends HttpRequest<TResponse> {
  protected constructor(uriBase: string) {
    super(uriBase);
  }

  protected Send(resource: TRequest, uriAddendum?: string): Promise<TResponse> {
    const responsePromise = this.SendRequest<TRequest, TResponse>(HttpVerb.Post, resource, uriAddendum);
    responsePromise.then((response) => {
      this.$Response.next(response);
    })
    return responsePromise;
  }

}
