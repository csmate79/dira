import { IResponse } from 'src/app/shared/dtos/response.dto';

import { IToken } from '../interfaces/token.interface';

export interface IRefreshResponse extends IResponse, IToken {}
