import { IResponse } from './response.dto';

/** A listázó végpontok válaszaihoz használt ős interface. */
export interface IQueryResponse<T> extends IResponse {
  paginationParams: {
    page: number;
    rows: number;
    totalRows: number;
    maxPage: number;
  };
  table: {
    rows: T[];
  };
}
