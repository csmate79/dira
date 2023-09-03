import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const SESSION_TOKEN_KEY = 'sessionToken';
const LOGIN_KEY = 'login';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  public intercept(request: HttpRequest<object>, next: HttpHandler): Observable<HttpEvent<object>> {
    if (request.url.includes('document')) {
      return next.handle(
        request.clone({
          setHeaders: {
            sessionToken: localStorage.getItem(SESSION_TOKEN_KEY) ?? '',
            login: localStorage.getItem(LOGIN_KEY) ?? '',
          },
        }),
      );
    }
    let appendBody = false;
    if (request.method === 'POST' || request.method === 'PUT' || request.method === 'PATCH') {
      appendBody = true;
    }
    return next.handle(
      request.clone({
        setHeaders: {
          sessionToken: localStorage.getItem(SESSION_TOKEN_KEY) ?? '',
          login: localStorage.getItem(LOGIN_KEY) ?? '',
        },
        body: appendBody
          ? {
              context: {
                requestId: new Date().getTime(),
                timestamp: new Date(),
              },
              ...request.body,
            }
          : null,
      }),
    );
  }
}
