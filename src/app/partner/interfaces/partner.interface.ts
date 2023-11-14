import { PartnerTitle } from '../../shared/enums/partner-title.enum';

/**
 * Felhasználó listaelemet reprezentáló interface.
 */
export interface IPartnerListElement {
  id: string;
  email: string;
  name: {
    title: PartnerTitle;
    firstName: string;
    lastName: string;
  };
}
