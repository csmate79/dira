import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataRequest } from 'src/app/shared/dtos/data-request.dto';
import { IResponse } from 'src/app/shared/dtos/response.dto';
import { ApiService } from 'src/app/shared/services/api.service';

/**
 * Authentikációval kapcsolatos végpontok hívása.
 */
@Injectable({ providedIn: 'root' })
export class ActivationService extends ApiService {
  public serviceUrl = 'asd';

  /**
   * Regisztráció aktiválása
   * @param token aktiváló token
   */
  public activateUser(data: IDataRequest<{ token: string }>): Observable<IResponse> {
    return super.post('/activation', data);
  }
}
