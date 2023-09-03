import { ValidationDataType } from '../enums/validation-data-type.enum';

/**
 * Regisztrációs adatok validációjára használatos request interface.
 */
export interface IPartnerDataValidationRequest {
  dataType: ValidationDataType;
  data: string;
  partnerId?: string;
}
