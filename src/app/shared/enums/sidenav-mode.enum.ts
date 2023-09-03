/**
 * Sidenav típusokat definiáló enum.
 */
export enum SidenavMode {
  /**
   * Nem tolja el az elemeket, és van overlay.
   */
  OVER = 'over',

  /**
   * Eltolja az elemeket, és van overlay.
   */
  PUSH = 'push',

  /**
   * Eltolja az elemeket, de nincs overlay.
   */
  SIDE = 'side',
}
