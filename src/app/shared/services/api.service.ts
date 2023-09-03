import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IRequestOptions } from '../interfaces/request-options.interface';

/**
 * API-t hívó service-ek ősosztálya.
 */
@Injectable({
  providedIn: 'root',
})
export abstract class ApiService {
  /**
   * A service által hívott végpontok gyökér útvonala.
   */
  protected abstract serviceUrl: string;

  constructor(private httpClient: HttpClient) {}

  /**
   * GET kérés küldése a *serviceUrl + endPoint* végpontra.
   */
  protected get<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    return this.httpClient.get<T>(this.serviceUrl + endPoint, options);
  }

  /**
   * POST kérés küldése a *serviceUrl + endPoint* végpontra.
   */
  protected post<T>(endPoint: string, body?: unknown, options?: IRequestOptions): Observable<T> {
    return this.httpClient.post<T>(this.serviceUrl + endPoint, body, options);
  }

  /**
   * PUT kérés küldése a *serviceUrl + endPoint* végpontra.
   */
  protected put<T>(endPoint: string, body?: unknown, options?: IRequestOptions): Observable<T> {
    return this.httpClient.put<T>(this.serviceUrl + endPoint, body, options);
  }

  /**
   * PATCH kérés küldése a *serviceUrl + endPoint* végpontra.
   */
  protected patch<T>(endPoint: string, body?: unknown, options?: IRequestOptions): Observable<T> {
    return this.httpClient.patch<T>(this.serviceUrl + endPoint, body, options);
  }

  /**
   * DELETE kérés küldése a *serviceUrl + endPoint* végpontra.
   */
  protected delete<T>(endPoint: string, body?: unknown, options?: IRequestOptions): Observable<T> {
    return this.httpClient.delete<T>(this.serviceUrl + endPoint, options);
  }
}
