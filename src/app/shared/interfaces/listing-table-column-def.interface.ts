export const ACTIONS_COLUMN: IListingTableColumnDef = {
  name: 'actions',
  headerKey: 'COMMON.ACTIONS',
};

/**
 * Táblázatos litázó oszlopdefiníciója.
 */
export interface IListingTableColumnDef {
  /**
   * Az oszlop neve.
   * A listázandó entitások adott mezőinek nevével meg kell, hogy egyezzen.
   */
  name: string;

  /**
   * Az oszlop fejlécének lokalizációs kulcsa.
   */
  headerKey: string;

  /**
   * Egy listaelem formázása stringgé (tipikusan pipe-ok)
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  valueFormatter?: (element: any) => string;
}
