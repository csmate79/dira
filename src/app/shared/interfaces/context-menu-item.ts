import { Right } from '../enums/right.enum';

export interface IContextMenuItem<T> {
  rights: Right[];
  translateKey: string;
  action: (element: T) => unknown;
  visible?: (element?: T) => boolean;
}
