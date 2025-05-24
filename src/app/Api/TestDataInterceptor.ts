import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MOCK_USERS } from './TestData/Users';
import { MOCK_ACCOUNTS } from './TestData/Accounts';
import { MOCK_ENCRYPTION_KEY } from './TestData/EncryptionKey';
import { MOCK_EXCHANGE } from './TestData/Exchange';
import { MOCK_USER_TOKEN } from './TestData/UserToken';

/**
 * Intercepts HTTP calls to return mock data for development/testing.
 * This sits just before the API call is executed so real calls are avoided.
 */
@Injectable()
export class TestDataInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (req.url.endsWith('/users')) {
      return of(new HttpResponse({ status: 200, body: MOCK_USERS }));
    }

    if (req.url.match(/\/accounts\/\d+$/) && req.method === 'GET') {
      return of(new HttpResponse({ status: 200, body: MOCK_ACCOUNTS }));
    }

    if (req.url.match(/\/encryption-key\/\d+$/) && req.method === 'GET') {
      return of(new HttpResponse({ status: 200, body: MOCK_ENCRYPTION_KEY }));
    }

    if (req.url.match(/\/exchange\/\d+$/) && req.method === 'GET') {
      return of(new HttpResponse({ status: 200, body: MOCK_EXCHANGE }));
    }

    if (req.url.endsWith('/user-credentials/') && req.method === 'POST') {
      return of(new HttpResponse({ status: 200, body: MOCK_USER_TOKEN }));
    }

    return next.handle(req);
  }
}
