import { MatColor } from '../utils/mat-color.type';

/**
 * Megerősítő dialog számára átadható paramétereket meghatározó interface.
 */
export interface IConfirmDialogData {
  /**
   * A megjelenítendő cím lokalizációs kulcsa.
   */
  titleKey: string;

  /**
   * A megjelenítendő szöveg tartalom lokalizációs kulcsa.
   */
  contentKey?: string;

  /**
   * A cím fordítási paraméterei
   */
  titleInterpolateParams?: string;

  /**
   * A szöveg tartalom fordítási paraméterei.
   */
  contentInterpolateParams?: string;

  /**
   * A megszakítás gomb szövegének lokalizációs kulcsa.
   */
  cancelKey?: string;

  /**
   * A megszakítás gomb színe.
   */
  cancelColor?: MatColor;

  /**
   * A megerősítés gomb szövegének lokalizációs kulcsa.
   */
  confirmKey?: string;

  /**
   * A megerősítés gomb színe.
   */
  confirmColor: MatColor;

  /**
   * Dialóg adatok.
   */
  data?: unknown;
}
