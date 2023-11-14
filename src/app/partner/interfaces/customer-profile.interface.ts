import { CurrencyType } from 'src/app/shared/enums/currency-type.enum';

export interface ICustomerProfile {
  /**
   * Információs számla értéke
   */
  informationAccountBalance: number;

  /**
   * Értékszámla értéke
   */
  transactionAccountBalance: number;

  /**
   * Információs vagyonérték
   */
  informationAssetValue: number;

  /**
   * Értékelési index
   */
  ratingIndex: number;

  /**
   * vélemény szám
   */
  ratingQuantity: number;

  /**
   * devizanem
   */
  currency: CurrencyType;
}
