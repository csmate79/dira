import { Pipe, PipeTransform } from '@angular/core';

/**
 * Enum-ok tömbbé való transzformálását végző pipe.
 */
@Pipe({
  name: 'enumToArray',
})
export class EnumToArrayPipe implements PipeTransform {
  /**
   * Enum tömbbé transzformálása.
   * @param data Enum típus.
   */
  public transform(data: object): string[] {
    return Object.keys(data);
  }
}
