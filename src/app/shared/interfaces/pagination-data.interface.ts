import { IPagination } from './pagination.interface';

/**
 * Lapozáshoz használt adatok interface.
 */

export interface IPaginationData extends IPagination {
  /**
   * Összes elemszám
   */
  totalItemCount: number;
}
