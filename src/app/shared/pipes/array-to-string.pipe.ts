import { Pipe, PipeTransform } from '@angular/core';
import { TranslateController } from '../controllers/translate.controller';

@Pipe({
  name: 'arrayToString',
})
export class ArrayToStringPipe implements PipeTransform {
  constructor(private translateController: TranslateController) { }

  transform(value: (string)[], type: 'label' | 'category'): string {
    let mappedString = '';
    if (value && value.length > 0) {
      value.forEach((element) => {
        if (type === 'category') {
          mappedString += (element as string) + ', ';
        }
      });
      mappedString = mappedString.trim().slice(0, -1);
    } else {
      mappedString = this.translateController.instant(
        `COMMON.NO_${type.toUpperCase()}_ADDED`,
      ) as string;
    }
    return mappedString;
  }
}
