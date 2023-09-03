import { IQueryPaginationParams } from '../interfaces/query-pagination-params.interface';

/**
 * A listázó végpontok kéréseihez használt interface.
 */
export interface IQueryRequestV2 {
  paginationParams: IQueryPaginationParams;
  queryParams: IFilterField[];
  sortParams?: ISortParams[];
}

export interface IFilterField {
  filterName: string;
  parameters: (string | number | boolean | null)[];
}

export interface ISortParams {
  orderByColumn: string;
  order: string;
}
