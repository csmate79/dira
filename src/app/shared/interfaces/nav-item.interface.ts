import { Right } from '../enums/right.enum';

/**
 * Navigáció elemek.
 */
export interface INavItem {
  /**
   * Link a navigáció céljára.
   */
  link: string;

  /**
   * Fordítási kulcs.
   */
  body: string;

  /**
   * Szükséges jogosultság.
   */
  rights: Right[];

  /**
   * Ikon
   */
  icon?: string;
}
