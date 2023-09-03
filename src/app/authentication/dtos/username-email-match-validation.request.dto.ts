/**
 * Felhasználónév és email egyazon fiókhoz tartozik-e. Ennek a validációjára használatos request interface.
 */
export interface IUsernameEmailMatchValidationRequest {
  userName: string;
  email: string;
}
