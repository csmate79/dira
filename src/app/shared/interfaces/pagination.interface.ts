/**
 * Lapozáshoz használt alapvető paraméterek interface.
 */
export interface IPagination {
  /**
   * Az aktuális lap sorszáma
   */
  pageIndex: number;
  /**
   * Az aktuális lapméret (mennyi elem látható egy lapon)
   */
  pageSize: number;
}
