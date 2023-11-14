import { Pipe, PipeTransform } from '@angular/core';
import { ISelectDataSource } from '../interfaces/select-data-source.interface';

@Pipe({
    name: 'enumToSelectOptions',
})
export class EnumToSelectOptionsPipe implements PipeTransform {
    public transform(
        data: object,
        prefix: string,
        filterFn?: (data: ISelectDataSource[]) => ISelectDataSource[],
    ): ISelectDataSource[] {
        if (!prefix) {
            throw Error('[EnumToSelectOptionsPipe]: You should define prefix');
        }
        if (data) {
            const mappedData = Object.keys(data).map((item) => ({ value: item, content: prefix + item }));
            return filterFn ? filterFn(mappedData) : mappedData;
        }
        return [];
    }
}
