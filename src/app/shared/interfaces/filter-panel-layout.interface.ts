/**
 * Szűrőpanel elrendezés interface.
 */

export interface IFilterPanelLayout {
  /**
   * A form elrendezése
   */
  formLayout: 'row' | 'row wrap' | 'column';
  /**
   * Gombok elrendezése
   */
  buttonLayout: 'row' | 'column';
  /**
   * Formcontrolok közötti távolság
   */
  formLayoutGap: string;
  /**
   * Gombok közötti távolság
   */
  buttonLayoutGap: string;
}
