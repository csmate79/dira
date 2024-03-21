import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrappingPipe',
})
export class WrappingPipe implements PipeTransform {
  public transform(value: any, displayPipe?: PipeTransform): any {
    if (value !== undefined) {
      return displayPipe && displayPipe.transform ? displayPipe.transform(value) : value;
    }
    return value;
  }
}
