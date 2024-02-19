import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { sha512 } from 'js-sha512';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { FunctionCode } from 'src/app/shared/enums/function-code.enum';
import { IResponse } from 'src/app/shared/dtos/response.dto';
import { IDataResponse } from 'src/app/shared/dtos/data-response.dto';
import { IDataRequest } from 'src/app/shared/dtos/data-request.dto';
// import { CustomerProfileController } from 'src/app/partner/controllers/customer-profile.controller';
import { IRefreshResponse } from '../dtos/refresh-response.dto';
import { IRegistrationRequest } from '../dtos/registration-request.dto';
import { ValidationDataType } from '../enums/validation-data-type.enum';
import { AuthenticationService } from '../services/authentication.service';
import { ISecurityUser } from '../interfaces/security-user.interface';
import { ModuleUrlEnum } from '../../shared/enums/url/module-url.enum';
import { PartnerType } from '../../shared/enums/partner-type.enum';
import { AuthenticationStateController } from './authentication-state.controller';
import { ActivationService } from '../services/activation.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationComponent } from '../components/authentication/authentication.component';

/** Authentikációt kezelő controller. */
@Injectable({
    providedIn: 'root',
})
export class AuthenticationController {
    constructor(
        private router: Router,
        private service: AuthenticationService,
        private activationService: ActivationService,
        private authStateController: AuthenticationStateController,
        private dialog: MatDialog
        // private customerProfileController: CustomerProfileController,
    ) {
        this.authStateController
            .refreshSession()
            .pipe(switchMap(() => this.refreshToken()))
            .subscribe();
    }

    /**
     * Bejelentkezés felhasználónév és jelszó alapján
     *
     * @param username Felhasználónév
     * @param password Jelszó
     */
    public login(
        username: string,
        password: string,
    ): Observable<IDataResponse<ISecurityUser> | null> {
        const hashedPassword = sha512(password);
        return this.service.login(username, hashedPassword).pipe(
            catchError((error) => throwError(error)),
            tap((response) => this.authStateController.setTokenData(response.data)),
            tap((response) => this.authStateController.setUser(response.data)),
            // tap(() => this.customerProfileController.getCalculateUserValues()),
        );
    }

    /** Felhasználó kijelentkeztetése. */
    public logout(): Observable<IResponse | null> {
        return this.service.logout().pipe(tap(() => this.logoutUserAndNavigate()));
    }

    /** Létező és érvényes session visszaállítása oldal újratöltésekor. */
    public restoreSession(): Observable<IRefreshResponse | null> {
        const token = this.authStateController.getSessionToken();
        if (token) {
            return this.service.getUser().pipe(
                tap((response) => {
                    if (response) {
                        this.authStateController.setUser(response.data);
                    }
                }),
                switchMap((response) => (response ? this.refreshToken() : of(null))),
            );
        }
        return of(null);
    }

    /**
     * Bejelentkezéskor kapott felhasználói adatok és tokenek tárolása és frissítése.
     *
     * @param data Felhasználó adatai és tokenek
     */
    public refreshToken(): Observable<IRefreshResponse> {
        return this.service
            .refreshToken(this.authStateController.getSessionToken())
            .pipe(tap((response) => this.authStateController.setTokenData(response)));
    }

    /** Regisztrációs adatok validációja. */
    public validateRegistrationData(
        data: string,
        dataType: ValidationDataType,
        partnerId?: string,
    ): Observable<boolean> {
        return this.service.validateRegistrationData({ data, dataType, partnerId }).pipe(
            map((response) => response && response.funcCode === FunctionCode.OK),
            catchError(() => of(false)),
        );
    }

    /** A felhasználónév és email egyazon fiókhoz tartozik. */
    public validateUsernameEmailMatch(
        dataType: ValidationDataType,
        data: string[],
    ): Observable<boolean> {
        return this.service.validateUsernameEmailMatch({ dataType, data }).pipe(
            map((response) => response && response.funcCode === FunctionCode.OK),
            catchError(() => of(false)),
        );
    }

    /** Regisztráció. */
    public registerUser(request: IRegistrationRequest): Observable<boolean> {
        return this.service
            .registerUser(request)
            .pipe(map((response) => response && response.funcCode === FunctionCode.OK));
    }

    /** Admin általi regisztráció */
    public registerUserByAdmin(request: IRegistrationRequest): Observable<boolean> {
        return this.service
            .registerUserByAdmin(request)
            .pipe(map((response) => response && response.funcCode === FunctionCode.OK));
    }

    /**
     * Felhasználó aktiválása
     *
     * @param token Token.
     */
    public activateUser(token: string): Observable<IResponse> {
        return this.activationService.activateUser({ data: { token } });
    }

    public static isBusinessPartner(partnerType: PartnerType | undefined | null) {
        if (partnerType) {
            const businessPartnerTypes = [
                PartnerType.CORPORATE_CUSTOMER,
                PartnerType.CORPORATE_CUSTOMER_ADMIN,
                PartnerType.PUBLIC_INSTITUTION_CUSTOMER,
                PartnerType.PUBLIC_INSTITUTION_CUSTOMER_ADMIN,
            ];
            return businessPartnerTypes.includes(partnerType);
        }
        return false;
    }

    /**
     * Elfelejtett jelszó e-mail kérésének küldése
     *
     * @param email E-mail cím
     */
    public forgottenPasswordSendEmail(email: string): Observable<IResponse> {
        const mappedData: IDataRequest<string> = {
            data: email,
        };
        return this.service.postForgottenPasswordSendEmail(mappedData);
    }

    /** Kijelentkezés backend hívás nélkül */
    public logoutUserAndNavigate(): void {
        this.authStateController.clearUser();
        this.router.navigate([ModuleUrlEnum.AUTH]);
    }

    /**
     * Elfelejtett jelszó megváltoztatása
     *
     * @param password Új jelszó
     * @param token Token
     */
    public changePassword(password: string, token: string): Observable<IResponse> {
        const hashedPassword = sha512(password);
        const mappedData: IDataRequest<{ password: string; token: string }> = {
            data: {
                password: hashedPassword,
                token,
            },
        };
        return this.service.putChangePassword(mappedData);
    }

    /**
     * Felhasználó aktiválása
     *
     * @param token Token.
     */
    public forgottenPasswordTokenValidityCheck(token: string): Observable<boolean> {
        return this.service.getForgottenPasswordTokenValidityCheck(token).pipe(
            map((response) => response && response.funcCode === FunctionCode.OK),
            catchError(() => of(false)),
        );
    }

    public openRegistrationDialog() {
        this.dialog.open(AuthenticationComponent, {
            width: '400px',
        });
    }
}
