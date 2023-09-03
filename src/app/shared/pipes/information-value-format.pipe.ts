import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'informationValueFormat',
})
export class InformationValueFormatPipe implements PipeTransform {
  transform(value: string | number): string {
    return parseFloat(Number(value).toFixed(2)).toString();
  }
}
