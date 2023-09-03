/**
 * Szűréshez használatos metaadatokat definiáló interface.
 */
export interface IQueryPaginationParams {
  /**
   * Ennyi sort fog tartalmazni az eredmény.
   */
  rows: number;

  /**
   * A lap sorszáma.
   */
  page: number;
}
