/**
 * Request kontextust definiáló interface.
 */
export interface IContext {
  /**
   * A request azonosítója.
   */
  requestId: string;

  /**
   * A request végző user, ha authentikációt igényel a request.
   */
  user?: {
    userName: string;
    password?: string;
  };

  /**
   * A request időbélyege.
   */
  timestamp?: Date;
}
