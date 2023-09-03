import { FunctionCode } from '../enums/function-code.enum';
import { IContext } from '../interfaces/context.interface';

/**
 * A Response-ok ős interface-je.
 */
export interface IResponse {
  context: IContext;
  funcCode: FunctionCode;
  message: string;
}
