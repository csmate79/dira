import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Observable } from 'rxjs';
import { IDataResponse } from 'src/app/shared/dtos/data-response.dto';
import { ISecurityUser } from 'src/app/authentication/interfaces/security-user.interface';
import { IDataRequest } from 'src/app/shared/dtos/data-request.dto';
import { IResponse } from 'src/app/shared/dtos/response.dto';
import { IPartnerListElement } from '../interfaces/partner.interface';
import { IQueryResponse } from '../../shared/dtos/query-response.dto';
import { IQueryRequest } from '../../shared/dtos/query-request.dto';
import { IPartnerQueryParams } from '../interfaces/partner-query-params.interface';
import { IPartnerData } from 'src/app/shared/interfaces/partner.interface';
import { SERVICE_URL } from 'src/app/shared/utils/service-url';

/**
 * Felhasználó service.
 */
@Injectable({ providedIn: 'root' })
export class PartnerService extends ApiService {
    protected serviceUrl = `${SERVICE_URL.INSTRUCTOR}/`;

    /**
     * Saját felhasználói adatok lekérdezése
     */
    public getCurrentPartnerData(): Observable<IPartnerData> {
        return super.get('1');
    }

    /**
     * Felhasználói adatok lekérése szerkesztésre (admin által)
     */
    public getPartnerData(partnerId: string): Observable<IDataResponse<ISecurityUser>> {
        return super.get(`/administration/partner/${partnerId}`);
    }

    /**
     * Saját felhasználói adatok szerkesztése
     * @param partnerData felhasználói adatok
     */
    public putEditCurrentPartnerData(
        partnerData: IDataRequest<IPartnerData>,
    ): Observable<IDataResponse<ISecurityUser>> {
        return super.put('/partner', partnerData);
    }

    /**
     * Felhasználói adatok szerkesztése admin által
     * @param partnerData felhasználói adatok
     */
    public putEditPartnerData(
        partnerData: IDataRequest<IPartnerData>,
    ): Observable<IDataResponse<ISecurityUser>> {
        return super.put('/administration/partner', partnerData);
    }

    /**
     * Felhasználók lekérdezése
     * @param query szűrési feltételek
     */
    public getPartners(
        query: IQueryRequest<IPartnerQueryParams>,
    ): Observable<IQueryResponse<IPartnerListElement>> {
        return super.post('/administration/partner/query', query);
    }

    /**
     * Felhasználó törlése admin által
     * @param id Felhasználó azonosítója
     */
    public deletePartnerByAdmin(id: string): Observable<IResponse> {
        return super.delete(`/administration/partner/${id}`);
    }

    /**
     * Saját felhasználó törlése
     */
    public deleteMyAccount(): Observable<IResponse> {
        return super.delete('/partner');
    }

    /**
     * Régi jelszó változtatása
     * @param data régi és új jelszó objektuma
     */
    public putChangeOldPassword(data: {
        oldPassword: string;
        newPassword: string;
    }): Observable<IResponse> {
        return super.put('/partner/password/change-old', { data });
    }
}
