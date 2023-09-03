/**
 * Lapozás eredményét definiáló interface.
 */
export interface IPaginatedResult<T> {
  /**
   * Az összes elemek száma (lapozás nélkül)
   */
  totalItemCount: number;

  /**
   * Az eredményhalmaz.
   */
  items: T[];
}
