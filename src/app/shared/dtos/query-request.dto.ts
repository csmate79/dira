import { IQueryPaginationParams } from '../interfaces/query-pagination-params.interface';
import { IQueryOrder } from '../interfaces/query-order.interface';

/**
 * A listázó végpontok kéréseihez használt interface.
 * @param T - Query paraméterek objektumának típusa.
 */
export interface IQueryRequest<T> {
  paginationParams: IQueryPaginationParams;
  queryParams: T;
  sortParams?: IQueryOrder[] | string[];
}
