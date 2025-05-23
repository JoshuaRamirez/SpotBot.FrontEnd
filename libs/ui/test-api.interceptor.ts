import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MOCK_USERS } from './test-data/users';

/**
 * Intercepts HTTP calls to return mock data for development/testing.
 * This sits just before the API call is executed so real calls are avoided.
 */
@Injectable()
export class TestApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (req.url.endsWith('/users')) {
      return of(new HttpResponse({ status: 200, body: MOCK_USERS }));
    }

    return next.handle(req);
  }
}
