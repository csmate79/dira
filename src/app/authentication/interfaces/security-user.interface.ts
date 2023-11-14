import { Right } from 'src/app/shared/enums/right.enum';
import { Role } from 'src/app/shared/enums/role.enum';
import { IToken } from './token.interface';
import { IPartnerData } from 'src/app/shared/interfaces/partner.interface';

/**
 * Felhasználó adatit tartalmazo interface, amely tartalmazza a szerep es jogkorok listajat is.
 */
export interface ISecurityUser extends IPartnerData, IToken {
    /**
     * Felhasználó szerepköreinek listája.
     */
    partnerGroupIds: Role[];

    /**
     * Felhasználó jogosultságainak listája
     */
    partnerPermissionIds: Right[];
}
