/**
 * Maszk létrehozására szolgáló függvény
 * @param mask maszk értéke
 * @param min minimum
 * @param max maximum
 * @param scale tört érték
 * @param radix tizedesjegy karaktere
 * @param mapToRadix milyen karaktereket mappelünk át radix-szá
 * @returns a teljes létrehozott maszk
 */

function createMask(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mask?: any,
  min?: number,
  max?: number,
  scale?: number,
  radix = '.',
  mapToRadix: string[] = ['.', ','],
) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return { mask, min, max, scale, radix, mapToRadix };
}

/**
 * Üres maszk, mindent be lehet írni
 */
const emptyMask = createMask('');

/**
 * Alapértelmezett szám maszk, ebbe csak számot lehet beírni.
 */
const numberMask = createMask(Number);

/**
 * Alapértelmezett százalék maszk.
 * Ha nincs beírva semmi, '' (semmi) jelenik meg. Azért kell, mert a második elem miatt a százelékjel mindig megjelenne.
 * Ha definiálva van, hogy mi legyen üres szónál, akkor nem jelenik meg a százalékjel.
 * A lazy miatt mindig megjelenik a százalékjel (kivéve az előző eset)
 * A mask num%, felhasználja a num blockot, majd százalékjelet fűz hozzá.
 * A num blokkba csak számot lehet írni, minimum 0, maximum 100 értékkel, a scale adja meg a tizedesjegy maximális hosszát.
 */
const percentMask = {
  mask: [
    {
      mask: '',
    },
    {
      lazy: false,
      mask: 'num%',
      blocks: {
        num: {
          mask: Number,
          min: 0,
          max: 100,
          scale: 0,
        },
      },
    },
  ],
};

/**
 * Százalék maszk két tizedesjeggyel. Működése megegyzik a percentMask működésével
 */
const percentMask2Scale = {
  mask: [
    {
      mask: '',
    },
    {
      lazy: false,
      mask: 'num%',
      blocks: {
        num: {
          mask: Number,
          min: 0,
          max: 100,
          scale: 2,
          radix: '.',
          mapToRadix: ['.', ','],
        },
      },
    },
  ],
};

/**
 * Minimum 0, maximum 100, két tizedesjegy
 */
const multiplierMask = createMask(Number, 0, 100, 2);

/**
 * 0 és 365 közti egész szám
 */
const daysMask = createMask(Number, 0, 365, 0);

/**
 * 1 és 100 közötti egész szám
 */
const currencyMask = createMask(Number, 0, Number.POSITIVE_INFINITY, 4);

/**
 * 0 és 1000 közötti egész szám
 */
const weightMask = createMask(Number, 0, 1000, 0);

/**
 * - végtelen és + végtelen közti számok
 */
const informationUnitNumberMask = createMask(
  Number,
  Number.NEGATIVE_INFINITY,
  Number.POSITIVE_INFINITY,
  Number.MAX_SAFE_INTEGER,
);

/**
 * Egész szám
 */
const integerMask = createMask(Number, undefined, undefined, 0);

/**
 * Egység érték szűrés maszk
 * nemnegatív, két tizedesjegy
 */
const informationValueCompareMask = createMask(Number, 0, Number.POSITIVE_INFINITY, 2, '.', [',']);

/**
 * Egység minimum árához maszkolás
 * nemnegatív, két tizedesjegy
 */
const minimumPriceMask = createMask(Number, 0, Number.POSITIVE_INFINITY, 2, '.', [',']);

export const masks = {
  multiplierMask,
  numberMask,
  percentMask,
  daysMask,
  emptyMask,
  currencyMask,
  integerMask,
  weightMask,
  informationUnitNumberMask,
  percentMask2Scale,
  informationValueCompareMask,
  minimumPriceMask,
};
