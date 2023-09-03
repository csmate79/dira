import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from 'src/app/shared/dtos/response.dto';
import { ApiService } from 'src/app/shared/services/api.service';
import { IDataResponse } from 'src/app/shared/dtos/data-response.dto';
import { IDataRequest } from 'src/app/shared/dtos/data-request.dto';
import { IPartnerDataValidationRequest } from '../dtos/partner-data-validation-request.dto';
import { IRegistrationRequest } from '../dtos/registration-request.dto';
import { IRefreshResponse } from '../dtos/refresh-response.dto';
import { IUserDataMatchRequest } from '../interfaces/user-data-match.request.interface';
import { ISecurityUser } from '../interfaces/security-user.interface';

/**
 * Authentikációval kapcsolatos végpontok hívása.
 */
@Injectable({ providedIn: 'root' })
export class AuthenticationService extends ApiService {
  public serviceUrl = 'asdasd';

  /**
   * Regisztráció.
   */
  public registerUser(request: IRegistrationRequest): Observable<IResponse> {
    return super.post('/partner', request);
  }

  /**
   * Admin általi regisztráció
   */
  public registerUserByAdmin(request: IRegistrationRequest): Observable<IResponse> {
    return super.post('/administration/partner', request);
  }

  /**
   * Regisztrációs adatok validációja.
   */
  public validateRegistrationData(request: IPartnerDataValidationRequest): Observable<IResponse> {
    return super.post('/partner/data-validation', request);
  }

  /**
   * A felhasználónév és email egyazon fiókhoz tartozik.
   */
  public validateUsernameEmailMatch(request: IUserDataMatchRequest): Observable<IResponse> {
    return super.post('/partner/data-match', request);
  }

  /**
   * Bejelentkezés felhasználónév és jelszó alapján.
   * @param username felhasználónév
   * @param password jelszó
   */
  public login(username: string, password: string): Observable<IDataResponse<ISecurityUser>> {
    return super.post('/partner/login', { login: { loginName: username, password } });
  }

  /**
   * Felhasználó kijelentkeztetése.
   */
  public logout(): Observable<IResponse> {
    return super.get('/partner/logout');
  }

  /**
   * Session frissítése
   */
  public refreshToken(refreshToken: string): Observable<IRefreshResponse> {
    return super.get<IRefreshResponse>(`/partner/refresh/${refreshToken}`);
  }

  /**
   * Bejelentkezett felhasználó alapvető adatainak lekérése.
   */
  public getUser(): Observable<IDataResponse<ISecurityUser>> {
    return super.get<IDataResponse<ISecurityUser>>('/partner');
  }

  /**
   * Elfelejtett jelszó e-mail kérésének küldése
   * @param data e-mail cím objektumként
   */
  public postForgottenPasswordSendEmail(data: IDataRequest<string>): Observable<IResponse> {
    return super.post('/partner/password/forgot', data);
  }

  /**
   * Elfelejtett jelszó megváltoztatása
   * @param data új jelszót és tokent tartalmaz
   */
  public putChangePassword(
    data: IDataRequest<{ password: string; token: string }>,
  ): Observable<IResponse> {
    return super.put('/partner/password/change', data);
  }

  /**
   * Elfelejtett jelszó beállítás token ellenőrzés végpont
   * @param token aktiváló token
   */
  public getForgottenPasswordTokenValidityCheck(token: string): Observable<IResponse> {
    return super.get(`/partner/password/forgot/${token}`);
  }
}
