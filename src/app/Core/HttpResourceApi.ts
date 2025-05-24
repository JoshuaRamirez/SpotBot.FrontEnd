import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';
import { Application } from '../Domain/Application';
import { HttpErrorEvent } from '../Events/HttpErrorEvent';
import { MOCK_USERS } from '../Api/TestData/Users';
import { MOCK_ACCOUNTS } from '../Api/TestData/Accounts';
import { MOCK_ENCRYPTION_KEY } from '../Api/TestData/EncryptionKey';
import { MOCK_EXCHANGE } from '../Api/TestData/Exchange';
import { MOCK_USER_TOKEN } from '../Api/TestData/UserToken';

type verbString = 'get' | 'post' | 'put' | 'patch' | 'delete';

export enum HttpVerb {
  Get = 'get',
  Post = 'post',
  Put = 'put',
  Patch = 'patch',
  Delete = 'delete',
}

export class HttpResourceApi {

  private static _axios = axios.create({
    baseURL: 'https://localhost:7018',
    timeout: 10000,
  });

  private readonly _resourceUrl: string;

  constructor(resourceUrl: string) {
    this._resourceUrl = resourceUrl;
  }

  private static getMockResponse<TResponse>(config: AxiosRequestConfig): AxiosResponse<TResponse> | null {
    const url = config.url ?? '';
    const method = (config.method ?? 'get').toLowerCase();

    const configCast = config as any;

    if (url.endsWith('/users') && method === 'get') {
      return { data: MOCK_USERS as unknown as TResponse, status: 200, statusText: 'OK', headers: {}, config: configCast };
    }

    if (/\/accounts\/\d+$/.test(url) && method === 'get') {
      return { data: MOCK_ACCOUNTS as unknown as TResponse, status: 200, statusText: 'OK', headers: {}, config: configCast };
    }

    if (/\/encryption-key\/\d+$/.test(url) && method === 'get') {
      return { data: MOCK_ENCRYPTION_KEY as unknown as TResponse, status: 200, statusText: 'OK', headers: {}, config: configCast };
    }

    if (/\/exchange\/\d+$/.test(url) && method === 'get') {
      return { data: MOCK_EXCHANGE as unknown as TResponse, status: 200, statusText: 'OK', headers: {}, config: configCast };
    }

    if (url.endsWith('/user-credentials/') && method === 'post') {
      return { data: MOCK_USER_TOKEN as unknown as TResponse, status: 200, statusText: 'OK', headers: {}, config: configCast };
    }

    return null;
  }

  protected async SendRequest<TRequest, TResponse>(httpVerb: HttpVerb, data?: any, uriAddendum?: string): Promise<TResponse> {
    let url = this._resourceUrl;
    url = url.replace("//", "/");
    if (uriAddendum !== undefined && uriAddendum !== null) {
      url = url + uriAddendum;
      url = url.replace("//", "/");
    }
    const token = Application.UserToken?.Token;
    const headers: any = {};
    if (token?.length) {
      headers.Authorization = `Bearer ${token}`;
    }
    const httpVerbString = httpVerb as verbString;
    const config: AxiosRequestConfig = { url, data, headers };
    config.method = httpVerbString;

    const mock = HttpResourceApi.getMockResponse<TResponse>(config);
    if (mock) {
      return Promise.resolve(this.handleResponse(mock));
    }

    try {
      const response = await HttpResourceApi._axios.request<TResponse>(config);
      return this.handleResponse(response);
    } catch (error) {
      if (error instanceof AxiosError) {
        this.handleError(error);
      } else {
        console.error('An unexpected error occurred:', error);
      }
      throw error;
    }
  }

  private handleResponse<TResponse>(response: AxiosResponse<TResponse>): TResponse {
    const responseData: TResponse = response.data;
    return responseData;
  }

  private handleError(error: AxiosError): void {
    if (error.response) {
      const status = error.response.status;
      const url = error.config?.url ?? 'unknown url';
      console.error(`Request to ${url} failed with status ${status}`, error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.message);
    } else {
      console.error('Error setting up request:', error.message);
    }
    new HttpErrorEvent(error).Publish();
  }
}
