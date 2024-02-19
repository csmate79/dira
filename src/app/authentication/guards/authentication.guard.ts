import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { NotificationController } from 'src/app/shared/controllers/notification.controller';
import { NotificationType } from 'src/app/shared/enums/notification-type.enum';
import { ModuleUrlEnum } from '../../shared/enums/url/module-url.enum';
import { AuthenticationStateController } from '../controllers/authentication-state.controller';

/**
 * Engedélyezi egy végpont elérését amennyiben van bejelentkezett felhasználó.
 * Ellenkező esetben access denied hibaüzenetet dob és visszairányít a bejelentkezési felületre.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard  {
  constructor(
    private router: Router,
    private authStateController: AuthenticationStateController,
    private notificationController: NotificationController,
  ) { }

  public canActivate():
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    return this.authStateController.isLoggedIn$.pipe(
      filter((value) => value !== null),
      map((isLoggedIn) => {
        if (!isLoggedIn) {
          this.router.navigate([ModuleUrlEnum.AUTH], {
            queryParams: { redirectUrl: window.location.pathname },
          });
          this.notificationController.showTranslatedMessage(
            NotificationType.ERROR,
            'ACCESS_DENIED',
          );
          return false;
        }
        return true;
      }),
    );
  }
}
