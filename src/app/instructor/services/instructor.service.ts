import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { SERVICE_URL } from 'src/app/shared/utils/service-url';
import { IInstructorData } from '../interfaces/instructor.interface';

@Injectable({
    providedIn: 'root',
})
export class InstructorService extends ApiService {
    protected serviceUrl = `${SERVICE_URL.INSTRUCTOR}`;

    /**
     * Instruktor adatainak lekérése ID alapján
     */
    public getInstructor(id: string): Observable<IInstructorData> {
        return super.get(`/${id}`);
    }

    /**
     * Összes instruktor lekérdezése
     */
    public getInstructorList(): Observable<IInstructorData[]> {
        return super.get('').pipe(map((res: any) => [...res.instructors]));
    }

    /**
     * Új instruktor felvétele
     */
    public postCreateInstructor(instructorData: IInstructorData) {
        return super.post('', instructorData);
    }
}
