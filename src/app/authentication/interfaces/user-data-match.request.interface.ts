import { ValidationDataType } from '../enums/validation-data-type.enum';

export interface IUserDataMatchRequest {
  dataType: ValidationDataType;
  data: string[];
}
