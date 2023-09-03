import { AbstractControl } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthenticationController } from 'src/app/authentication/controllers/authentication.controller';
import { ValidationDataType } from 'src/app/authentication/enums/validation-data-type.enum';
import { timeoutMs } from '../utils/times';

/**
 * Létrehoz egy validátort, amely biztosítja, hogy a megadott felhasználó adat megfelelő.
 * @param dataType - Az adat típusa, amit ellenőrizni kell.
 * @param controller - Az ellenőrzést végző AuthenticationController.
 * @param partnerId - Létező felhasználó esetén a felhasználó azonosítója.
 * @param checkIfExists - True értéknél azt vizsgálja, hogy létezik-e. Falsenál pedig azt, hogy nem. default: true
 */
export function partnerDataValidator(
  dataType: ValidationDataType,
  controller: AuthenticationController,
  partnerId?: string,
  checkIfExists = true,
): (control: AbstractControl) => Observable<{ dataInvalid: boolean } | null> {
  return (control: AbstractControl): Observable<{ dataInvalid: boolean } | null> => {
    const checkResultTrue = checkIfExists ? null : { dataInvalid: true };
    const checkResultFalse = checkIfExists ? { dataInvalid: true } : null;
    return timer(timeoutMs.md).pipe(
      switchMap(() =>
        controller
          .validateRegistrationData(control.value as string, dataType, partnerId)
          .pipe(map((result) => (result ? checkResultTrue : checkResultFalse))),
      ),
    );
  };
}
