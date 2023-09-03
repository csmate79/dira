/**
 * Felugró értesítések beállításait definiáló interface.
 */
export interface INotificationOptions {
  /**
   * Az időtartam, amíg az értesítés látható (ms).
   */
  duration?: number;

  /**
   * A névtér, amiben az üzenet fordításának kulcsát kell keresni.
   */
  namespace?: string;

  /**
   * A fordítás paraméterei.
   */
  interpolateParams?: unknown;
}
