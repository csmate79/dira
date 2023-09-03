import { IResponse } from './response.dto';

export interface IDataResponse<T> extends IResponse {
  data: T;
}
