import { PartnerType } from '../../shared/enums/partner-type.enum';

/**
 * Felhasználó query paraméterek interface-je.
 */
export interface IPartnerQueryParams {
  /**
   * Keresztnév szűrőmező.
   */
  firstName: string;
  /**
   * Vezetéknév szűrőmező.
   */
  lastName: string;
  /**
   * E-mail szűrőmező.
   */
  email: string;
  /**
   * Cégnév szűrőmező.
   */
  companyName: string;
  /**
   * Felhasználó típusa szűrőmező.
   */
  partnerType: PartnerType;
}
