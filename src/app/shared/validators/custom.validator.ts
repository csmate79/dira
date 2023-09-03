import { UntypedFormControl } from '@angular/forms';
import { IFile } from '../../information-unit/interfaces/file.interface';

const HUNGARIAN_LETTERS = 'áéíóöőúüűÁÉÍÓÖŐÚÜŰ';

/**
 * Alapértelmezett validátor az e-mail címekhez: Betűk vagy számok, majd @ jel, majd betűk és
 * számok, majd pont, és a végén legalább két betűből álló szó
 */
export const emailRegex = '[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}';

/**
 * Alapértelmezett validátor a felhasználó nevekhez (SPACE engedélyezett): Magyar betűk, pont,
 * kötőjel, szóköz, min 1, max 100 hosszú
 */
export const nameWithSpaceRegex = `^[a-zA-Z${HUNGARIAN_LETTERS}'.\\-\\s,]{1,100}$`;

/**
 * Alapértelmezett validátor a felhasználó nevekhez (SPACE NEM engedélyezett): Magyar betűk, pont,
 * kötőjel, min 1, max 100 hosszú
 */
export const nameWithoutSpaceRegex = `^[a-zA-Z${HUNGARIAN_LETTERS}'.\\-,]{1,100}$`;

/**
 * Alapértelmezett validátor az intézmény nevekhez (SPACE engedélyezett): Magyar betűk vagy számok,
 * pont, kötőjel, szóköz, min 1, max 150 hosszú
 */
export const companyNameWithSpaceRegex = `^[a-zA-Z${HUNGARIAN_LETTERS}0-9'.\\-\\s,]{1,150}$`;

/**
 * Alapértelmezett validátor a jelszavakhoz: Legyen benne kisbetű, nagybetű, decimális karakter, min
 * 6, max 20 hosszú
 */
export const passwordRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{6,20}$';

/**
 * Alapértelmezett telefonszám validátor: Zárójel, szám és plusz és minusz karakterek, min 0, max 40
 * hosszú
 */
export const phoneNumberRegex = '[()0-9+-\\s]{0,40}';

/**
 * Alapértelmezett validátor a felhasználónevekhez: Betűk, számok, kötőjel, alulvonás, kukac, pont
 * lehet benne, min 6, max 32 hosszú
 */
export const usernameRegex = '[a-zA-Z0-9-_@.]{6,32}';

/** Alapértelmezett validátor a százalékhoz: min 0 és max 100 érték */
export const percentRegex = '^[1-9][0-9]?$|^100$|^0$';

/**
 * Alapértelmezett validátor az értesítés megnevezéséhez: kisbetűk, nagybetűk, magyar kisbetűk és
 * nagybetűk, ' . - , karakterek, space engedélyezett, legalább 0, maximum 30 karakter
 */
export const notificaionNameRegex = `^[a-zA-Z${HUNGARIAN_LETTERS}0-9'.-\\s,]{0,30}$`;

/**
 * Fájl méret validátor
 *
 * @param maxSize Maximum mérete megabyte mértékegységben
 */
export const fileLengthValidator = (maxSize: number) => (control: UntypedFormControl) => {
  const value = control.value as IFile;
  return value?.fileSize && value.fileSize > maxSize * 1000000 ? { maxSize } : null;
};
