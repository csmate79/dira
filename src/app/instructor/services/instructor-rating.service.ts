import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { SERVICE_URL } from 'src/app/shared/utils/service-url';
import { IInstructorData } from '../interfaces/instructor.interface';
import { IRatingDatas } from '../interfaces/rating-datas.interface';

@Injectable({
    providedIn: 'root',
})
export class InstructorRatingService extends ApiService {
    protected serviceUrl = `${SERVICE_URL.RATING}`;

    /**
     * Instruktor adatainak lekérése ID alapján
     */
    public postCreateNewRating(
        id: string,
        ratingDatas: IRatingDatas,
    ): Observable<IInstructorData> {
        return super.post(`/instructor/${id}`, ratingDatas);
    }
}
