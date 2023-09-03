/**
 * Arra szolgál, hogy tujduk, hogy melyik résznél tartunk a jelszóváltoztatásban.
 * Az emailküldésnél vagy a jelszócserénél
 */
export enum PasswordModeEnum {
  CHANGING_PASSWORD = 'CHANGING_PASSWORD',
  FORGOTTEN_PASSWORD = 'FORGOTTEN_PASSWORD',
}
