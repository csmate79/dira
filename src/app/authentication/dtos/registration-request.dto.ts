import { ISecurityData } from '../interfaces/security-data.interface';
import { IPartnerData } from '../../shared/interfaces/partner-data.interface';

/**
 * Regisztráció request interface.
 */
export interface IRegistrationRequest {
  /**
   * Felhasználói adatok
   */
  securityData: ISecurityData;

  /**
   * Felhasználó adatok
   */
  partnerData: IPartnerData;
}
