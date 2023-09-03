export interface IToken {
  /**
   * Hozzáféréshez szükséges token.
   */
  sessionToken: string;

  /**
   * Session frissítéséhez szükséges token.
   */
  refreshToken: string;

  /**
   * Hozzáférést biztosító token lejárati időpontja Unix-időben.
   */
  sessionTokenExpirationDate: string;
}
