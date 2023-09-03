import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ModuleUrlEnum } from 'src/app/shared/enums/module-url.enum';
import { AuthenticationStateController } from '../controllers/authentication-state.controller';

@Injectable({
  providedIn: 'root',
})
export class NoAuthenticationGuard implements CanActivate {
  constructor(private authStateController: AuthenticationStateController, private router: Router) {}

  public canActivate(): Observable<boolean> {
    return this.authStateController.getUserAsObservable().pipe(
      map((user) => {
        if (user) {
          this.router.navigate([ModuleUrlEnum.LANDING]);
          return false;
        }
        return true;
      }),
    );
  }
}
