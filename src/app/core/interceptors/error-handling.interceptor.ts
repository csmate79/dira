import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthenticationStateController } from 'src/app/authentication/controllers/authentication-state.controller';
import { ModuleUrlEnum } from 'src/app/shared/enums/url/module-url.enum';
import { IHttpErrorResponse } from 'src/app/shared/interfaces/http-error-response.interface';
import { NotificationController } from '../../shared/controllers/notification.controller';
import { NotificationType } from '../../shared/enums/notification-type.enum';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
  constructor(
    private notificationController: NotificationController,
    private authStateController: AuthenticationStateController,
    private router: Router,
  ) { }

  public intercept(request: HttpRequest<object>, next: HttpHandler): Observable<HttpEvent<object>> {
    return next.handle(request).pipe(
      catchError((error: { error: IHttpErrorResponse }) => {
        if (error.error?.faultType) {
          if (
            error.error.faultType === 'SESSION_EXPIRED' ||
            error.error.faultType === 'NOT_AUTHORIZED'
          ) {
            this.authStateController.clearUser();
            this.router.navigate([ModuleUrlEnum.AUTH], {
              queryParams: { redirectUrl: this.router.url },
            });
          }
          if (error.error.faultType === 'ENTITY_VERSION_CONFLICT') {
          }
          if (
            !(
              request.url.includes('data-validation') ||
              request.url.includes('data-match') ||
              request.url.includes('change-old')
            )
          ) {
            this.notificationController.showTranslatedMessage(
              NotificationType.ERROR,
              error.error.faultType,
            );
          }
        } else {
          this.notificationController.showTranslatedMessage(
            NotificationType.ERROR,
            'SERVICE_UNAVAILABLE',
          );
        }
        return throwError(error);
      }),
    );
  }
}
