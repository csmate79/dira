import { AbstractControl } from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthenticationController } from 'src/app/authentication/controllers/authentication.controller';
import { ValidationDataType } from 'src/app/authentication/enums/validation-data-type.enum';
import { timeoutMs } from '../utils/times';

/**
 * Létrehoz egy validátort, amely biztosítja, hogy a megadott felhasználónév és email egy fiókhoz tartozik.
 * @param dataType - Enum érték, hogy milyen adatra szeretnék vizsgálni
 * @param userNameGetter - Felhasználónevet vissza adó függvény
 * @param controller - Az ellenőrzést végző AuthenticationController.
 */
export function userNameEmailMatchValidator(
  dataType: ValidationDataType,
  userNameGetter: () => string,
  controller: AuthenticationController,
): (control: AbstractControl) => Observable<{ usernameEmailInvalid: boolean } | null> {
  return (control: AbstractControl): Observable<{ usernameEmailInvalid: boolean } | null> => {
    if (control.value === null || userNameGetter() === null) {
      return of(null);
    }
    return timer(timeoutMs.md).pipe(
      switchMap(() =>
        controller
          .validateUsernameEmailMatch(dataType, [userNameGetter(), control.value as string])
          .pipe(map((result) => (result ? null : { usernameEmailInvalid: true }))),
      ),
    );
  };
}
