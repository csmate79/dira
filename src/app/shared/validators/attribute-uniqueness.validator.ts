import { AbstractControl } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { InformationUnitController } from 'src/app/information-unit/controllers/information-unit.controller';
import { timeoutMs } from '../utils/times';

/**
 * Létrehoz egy validátort, amely validálja, hogy az egyedinek szánt attribútum valóban egyedi-e.
 * @param attributeId Attribútum azonosítója
 * @param controller Kontroller osztály
 * @param informationUnitId Információegység azonosítója
 */
export function attributeUniquenessValidator(
  attributeId: string,
  controller: InformationUnitController,
  informationUnitId?: string,
): (control: AbstractControl) => Observable<{ notUnique: boolean } | null> {
  return (control: AbstractControl): Observable<{ notUnique: boolean } | null> =>
    timer(timeoutMs.lg).pipe(
      switchMap(() =>
        controller
          .validateAttributeUniqueness(control.value as string, attributeId, informationUnitId)
          .pipe(map((result) => (result ? null : { notUnique: true }))),
      ),
    );
}
