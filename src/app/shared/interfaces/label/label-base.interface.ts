/**
 * Címke alapadatok
 */
export interface ILabelBase {
  /**
   * Címke azonosító
   */
  id: string;

  /**
   * Címke neve
   */
  name?: string;

  /**
   * Leírás
   */
  description?: string;

  /**
   * Verzió
   */
  version?: number;

  /**
   * Érték
   */
  value?: string;
}
