import { CompanyType } from '../enums/company-type.enum';
import { Language } from '../enums/language.enum';
import { PartnerTitle } from '../enums/partner-title.enum';
import { PartnerType } from '../enums/partner-type.enum';

export interface IPartnerData {
    /** Felhasználó azonosítója */
    id?: string;
    /** Felhasználó lokációja */
    location: string;
    /** Felhasználónév */
    name: string;
    /** Email cím. */
    score: string;
    /** Az értékelések összessége */
    totalReviews: string;
    /** Keresztnév. */
    firstName?: string;
    /** Vezetéknév. */
    lastName?: string;
}
