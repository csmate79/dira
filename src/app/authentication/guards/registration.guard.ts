import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Role } from 'src/app/shared/enums/role.enum';
import { ModuleUrlEnum } from '../../shared/enums/module-url.enum';
import { AuthenticationStateController } from '../controllers/authentication-state.controller';

/**
 * Engedélyezi a regisztráció elérését amennyiben nincs bejelentkezett felhasználó vagy superadminnal vagyunk bejelentkezve.
 * Ez azért kell, hogy egy nem superadmin Role-ú felhasználó ne tudjon az auth/registration routera navigálni.
 */
@Injectable({
  providedIn: 'root',
})
export class RegistrationGuard implements CanActivate {
  constructor(private router: Router, private authStateController: AuthenticationStateController) {}

  public canActivate(): Observable<boolean> {
    return this.authStateController.getUserAsObservable().pipe(
      map((user) => {
        let canActivate = true;
        if (user) {
          canActivate = false;
        }
        if (
          user?.partnerGroupIds.includes(Role.SUPERADMIN_GROUP) ||
          user?.partnerGroupIds.includes(Role.PUBLIC_INST_CUST_ADMIN_GROUP) ||
          user?.partnerGroupIds.includes(Role.CORPORATE_CUSTOMER_ADMIN_GROUP)
        ) {
          canActivate = true;
        }
        if (!canActivate) {
          this.router.navigate([ModuleUrlEnum.LANDING]);
        }
        return canActivate;
      }),
    );
  }
}
