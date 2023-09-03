import { QueryOrderType } from '../enums/query-order-type.enum';

/**
 * Szűrések rendezésének paramétereit definiáló interface.
 */
export interface IQueryOrder {
  /**
   * A mező neve, ami alapján rendezni kell.
   */
  order: string;

  /**
   * A rendezés sorrendje.
   */
  type: QueryOrderType;
}
