/**
 * Lapozási opciókat definiáló interface.
 */
export interface IPaginationOptions {
  /**
   * Az aktuális lapméret (mennyi elem látható egy lapon)
   */
  pageSize: number;

  /**
   * A lehetséges lapméret opciók tömbje (amiket lehet választani a lapozóban)
   */
  pageSizeOptions: number[];
}
