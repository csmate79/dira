/**
 * Interface a regisztrációs adatok összegzésére.
 */
import { IPartnerData } from '../../shared/interfaces/partner-data.interface';

export interface IRegistrationSummary extends IPartnerData {
  /**
   * Felhasználónév
   */
  username: string;
  /**
   * Jelszó
   */
  password: string;
}
