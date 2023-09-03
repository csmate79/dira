import { Injectable } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class CrossFieldRequiredValidator {
  constructor(private translateService: TranslateService) {}

  public createValidator(
    formFieldName1: string,
    formFieldName2: string,
  ): (formGroup: UntypedFormGroup) => { crossFieldRequiredInvalid: string[] } | null {
    return (formGroup: UntypedFormGroup) => {
      if (
        (formGroup.get(formFieldName1)?.value && !formGroup.get(formFieldName2)?.value) ||
        (!formGroup.get(formFieldName1)?.value && formGroup.get(formFieldName2)?.value)
      ) {
        return {
          crossFieldRequiredInvalid: [
            this.translateService.instant(
              'VALIDATION.CROSSFIELDREQUIREDINVALID.' + formFieldName1.toUpperCase(),
            ) as string,
            this.translateService.instant(
              'VALIDATION.CROSSFIELDREQUIREDINVALID.' + formFieldName2.toUpperCase(),
            ) as string,
          ],
        };
      }
      return null;
    };
  }
}
