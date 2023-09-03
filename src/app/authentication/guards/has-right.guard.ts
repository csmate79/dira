import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificationController } from 'src/app/shared/controllers/notification.controller';
import { NgxPermissionsService } from 'ngx-permissions';
import { ModuleUrlEnum } from '../../shared/enums/module-url.enum';
import { NotificationType } from '../../shared/enums/notification-type.enum';

/**
 * Engedélyezi egy végpont elérését amennyiben a bejelentkezett felhasználó rendelkezik a megadott jogosultsággal.
 * Ellenkező esetben access denied hibaüzenetet dob és kijelentkezteti a felhasználót.
 */
@Injectable({
  providedIn: 'root',
})
export class HasRightGuard implements CanActivate {
  constructor(
    private router: Router,
    private notificationController: NotificationController,
    private ngxPermissionsService: NgxPermissionsService,
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
  ): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
    const requiredRight: string | string[] = route.data.requiredRight as string | string[];
    return from(this.ngxPermissionsService.hasPermission(requiredRight)).pipe(
      map((hasright) => {
        if (route.data.requiredRight && !hasright) {
          this.notificationController.showTranslatedMessage(
            NotificationType.ERROR,
            'ACCESS_DENIED',
          );
        }
        return hasright ? true : this.router.createUrlTree([ModuleUrlEnum.LANDING]);
      }),
    );
  }
}
