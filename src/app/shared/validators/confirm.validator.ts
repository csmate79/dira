import { UntypedFormGroup } from '@angular/forms';

/**
 * Létrehoz egy olyan validátort, amely biztosítja, hogy a két form field értékeinek egyeznie kell.
 *
 * @param formFieldName Az első form field neve
 * @param confirmFieldName A második form field neve
 */
export function confirmValidator(
  formFieldName: string,
  confirmFieldName: string,
): (formGroup: UntypedFormGroup) => { confirmInvalid: boolean } | null {
  return (formGroup: UntypedFormGroup): { confirmInvalid: boolean } | null =>
    formGroup.controls[formFieldName].value === formGroup.controls[confirmFieldName].value
      ? null
      : { confirmInvalid: true };
}
