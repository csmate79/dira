import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Language } from '../enums/language.enum';
import { LanguageMap } from '../utils/language.map';

/** Fordításokat és a nyelvet kezelő controller. */
@Injectable({
  providedIn: 'root',
})
export class TranslateController {
  /** Az aktuális nyelv. */
  public currentLanguage$: BehaviorSubject<Language>;

  constructor(private translateService: TranslateService) {
    this.currentLanguage$ = new BehaviorSubject<Language>(Language.HUN);
  }

  /**
   * Fordítás lekérése adott kulcshoz, aszinkron módon.
   *
   * @param key A fordítás kulcsa.
   * @param interpolateParams A fordítás paraméterei.
   */
  public get(
    key: string | string[],
    interpolateParams?: object | undefined,
  ): Observable<string | Record<string, string>> {
    return this.translateService.get(key, interpolateParams) as Observable<
      string | Record<string, string>
    >;
  }

  /**
   * Fordítás lekérése adott kulcshoz, aszinkron módon. Nyelvváltáskor is meghívódik a feliratkozó
   * kód.
   *
   * @param key A fordítás kulcsa.
   * @param interpolateParams A fordítás paraméterei.
   */
  public stream(
    key: string | string[],
    interpolateParams?: object | undefined,
  ): Observable<string | Record<string, string>> {
    return this.translateService.stream(key, interpolateParams) as Observable<
      string | Record<string, string>
    >;
  }

  /** Beállítja az aktuális nyelvet. */
  public use(language: Language): Observable<Record<string, object | string>> {
    const useLanguageObservable = this.translateService.use(LanguageMap[language]) as Observable<
      Record<string, object | string>
    >;
    this.currentLanguage$.next(language);
    localStorage.setItem('language', language);
    return useLanguageObservable;
  }

  /**
   * Fordítás lekérése szinkron módon.
   *
   * @param key A fordítás kulcsa.
   * @param interpolateParams A fordítás paraméterei.
   */
  public instant(
    key: string | string[],
    interpolateParams?: object | undefined,
  ): string | Record<string, object> {
    return this.translateService.instant(key, interpolateParams) as string | Record<string, object>;
  }
}
