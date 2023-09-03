import { INavItem } from './nav-item.interface';

/**
 * Navigáció csoportot reprezentál.
 */
export interface INavigationGroup {
  /**
   * Csoport forditási kulcsa.
   */
  groupTitleKey: string;

  /**
   * Csoporthoz tartozó Navigáció elemek.
   */
  navItems: INavItem[];

  /**
   * Megjeleníthetőség.
   */
  showGroup?: boolean;
}
