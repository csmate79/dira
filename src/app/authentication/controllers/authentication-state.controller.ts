import { Injectable, OnDestroy } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { filter, skip, startWith, tap, throttleTime } from 'rxjs/operators';
import { Right } from 'src/app/shared/enums/right.enum';
import { Role } from 'src/app/shared/enums/role.enum';
import { throttleTimeMs } from 'src/app/shared/utils/times';
import { ISecurityUser } from '../interfaces/security-user.interface';
import { IToken } from '../interfaces/token.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationStateController implements OnDestroy {
  public user$ = new BehaviorSubject<ISecurityUser | null>(null);

  public isLoggedIn$ = new BehaviorSubject<boolean | null>(null);

  private tokenRefresh$ = new Subject<void>();

  private userActive$ = new Subject<void>();

  private clickTimerSubscription!: Subscription;

  private _sessionTokenKey = 'sessionToken';

  private _sessionTokenExpirationDateKey = 'sessionTokenExpirationTime';

  private _loginNameKey = 'login';

  constructor(private permissionService: NgxPermissionsService) {
    this.initTimer();
  }

  ngOnDestroy(): void {
    this.clickTimerSubscription?.unsubscribe();
  }

  /**
   * Tevékenységre a bejelentkezési időzítő frissítése
   */
  public doAction(): void {
    this.userActive$.next();
  }

  private initTimer(): void {
    this.clickTimerSubscription?.unsubscribe();
    this.clickTimerSubscription = this.userActive$
      .pipe(
        filter(() => !!this.user$.getValue()),
        startWith(''),
        throttleTime(throttleTimeMs.refresh),
        skip(1),
        tap(() => this.tokenRefresh$.next()),
      )
      .subscribe();
  }

  public getSessionToken(): string {
    return localStorage.getItem(this._sessionTokenKey) ?? '';
  }

  public getLoginName(): string {
    return localStorage.getItem(this._loginNameKey) ?? '';
  }

  public setUser(user: ISecurityUser): void {
    localStorage.setItem(this._loginNameKey, user.userName);
    let permissions;
    if (user.partnerGroupIds.includes(Role.SUPERADMIN_GROUP)) {
      permissions = Object.values(Right) as Right[];
    } else {
      permissions = [...user.partnerPermissionIds];
    }
    this.permissionService.loadPermissions(permissions);
    this.isLoggedIn$.next(true);
    this.user$.next(user);
  }

  public setTokenData(tokenData: IToken): void {
    localStorage.setItem(this._sessionTokenKey, tokenData.sessionToken);
    localStorage.setItem(this._sessionTokenExpirationDateKey, tokenData.sessionTokenExpirationDate);
    this.initTimer();
  }

  public clearUser(): void {
    localStorage.removeItem(this._sessionTokenKey);
    localStorage.removeItem(this._sessionTokenExpirationDateKey);
    localStorage.removeItem(this._loginNameKey);
    this.permissionService.flushPermissions();
    this.user$.next(null);
    this.isLoggedIn$.next(null);
  }

  public refreshSession(): Observable<void> {
    return this.tokenRefresh$.asObservable();
  }

  public getUserAsObservable(): Observable<ISecurityUser | null> {
    return this.user$.asObservable();
  }
}
