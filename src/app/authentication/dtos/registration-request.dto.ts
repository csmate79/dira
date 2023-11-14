import { PartnerTitle } from 'src/app/shared/enums/partner-title.enum';
import { ISecurityData } from '../interfaces/security-data.interface';
import { Language } from 'src/app/shared/enums/language.enum';

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
    partnerData: {
        /** Nyelv */
        language: Language;
        /** Partner titulusa */
        partnerTitle: PartnerTitle | null;
        /** Keresztnév */
        firstName: string;
        /** Vezetéknév */
        lastName: string;
        /** Telefonszám */
        phoneNumber: string;
        /** Verzió */
        version: number;
        /** Partner email címe */
        email: string;
    };
}
