import { CompanyType } from '../enums/company-type.enum';
import { Language } from '../enums/language.enum';
import { PartnerTitle } from '../enums/partner-title.enum';
import { PartnerType } from '../enums/partner-type.enum';

export interface IPartnerData {
  /** Felhasználónév */
  userName: string;
  /** Felhasználó azonosítója */
  id?: string;
  /** Email cím. */
  email: string;
  /** Felhasználó típusa. */
  partnerType: PartnerType;
  /** Cég típusa. */
  companyType?: CompanyType;
  /** Telefonszám. */
  phoneNumber?: 'string';
  /** Nyelv. */
  language?: Language;
  /** A felhasználó titulusa. */
  title?: PartnerTitle;
  /** Keresztnév. */
  firstName?: string;
  /** Vezetéknév. */
  lastName?: string;

  /** Cég azonosítója (céges felhasználó esetén) */
  companyId?: string;
  /** Cég neve */
  name?: string;

  /** Verzió */
  version?: string;
}
