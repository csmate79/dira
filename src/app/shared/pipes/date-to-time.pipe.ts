import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToTime',
})
export class DateToTimePipe implements PipeTransform {
  transform(value: string | Date, controlValue: string, minMax: 'min' | 'max'): string {
    let mappedValue = '';
    if (this.sameDay(new Date(value), new Date(controlValue))) {
      const date = new Date(value);
      const hours = date.getHours();
      const ampm = hours >= 12 ? 'pm' : 'am';
      const minutes = date.getMinutes();
      mappedValue = `${hours % 12}:${minutes} ${ampm}`;
    } else if (minMax === 'min') {
      mappedValue = '12:00 am';
    } else if (minMax === 'max') {
      mappedValue = '11:59 pm';
    }
    return mappedValue;
  }

  private sameDay(d1: Date, d2: Date): boolean {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }
}
