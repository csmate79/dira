/**
 * Értesítések típusait definiáló enum.
 * Az egyes enum értékekhez tartozó string-ek határozzák meg, hogy a felugró értesítések
 * milyen css osztályt kapnak.
 */
export enum NotificationType {
  /**
   * Hiba esetén.
   */
  ERROR = 'error',

  /**
   * Sikeres művelet esetén.
   */
  SUCCESS = 'success',

  /**
   * Figyelmeztetés esetén.
   */
  WARNING = 'warning',
}
