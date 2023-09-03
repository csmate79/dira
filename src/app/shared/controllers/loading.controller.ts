import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { distinctUntilChanged, finalize, switchMap, tap } from 'rxjs/operators';

import { LoadingComponent } from '../components/loading/loading.component';

/**
 * Betöltőképernyő kezelésére szolgáló controller.
 */
@Injectable({
  providedIn: 'root',
})
export class LoadingController {
  private isLoading$: BehaviorSubject<boolean>;

  private waitingClients: number;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.isLoading$ = new BehaviorSubject<boolean>(false);
    this.waitingClients = 0;
  }

  /**
   * Várakozó kliens hozzáadása a betöltésre.
   * Ha legalább egy várakozó kliens van, akkor a loading állapot betöltésre kerül.
   */
  public enqueueClient(): void {
    this.waitingClients += 1;

    if (this.waitingClients > 0) {
      this.isLoading$.next(true);
    }
  }

  /**
   * Várakozó kliens kivétele a betöltésből.
   * Ha nincs több várakozó kliens, akkor a loading állapot törlődik.
   */
  public dequeueClient(): void {
    this.waitingClients -= 1;

    if (this.waitingClients < 0) {
      this.waitingClients = 0;
      throw Error('[LoadingController]: Attempted dequeueClient() without any waiting clients.');
    } else if (this.waitingClients === 0) {
      this.isLoading$.next(false);
    }
  }

  /**
   * Töltő állapot lekérése observable-ként. Csak akkor értesít, ha valóban történt változás.
   */
  public getLoading$(): Observable<boolean> {
    return this.isLoading$.pipe(distinctUntilChanged());
  }

  /**
   * Becsomagol egy observable-t úgy, hogy feliratkozás előtt a töltést beállítja,
   * majd ha végzett kikapcsolja és a becsomagolttal tér vissza.
   * @param source Az Observable, amit be szeretnénk csomagolni.
   */
  public withLoading$<T>(source: Observable<T>): Observable<T> {
    return timer(1).pipe(
      tap(() => this.enqueueClient()),
      switchMap(() => source.pipe(finalize(() => this.dequeueClient()))),
    );
  }

  /**
   * Kezeli a töltést úgy, hogy egy tetszőleges nézetbe szúrja be a loading komponenst.
   * @see withLoading$
   * @param viewContainerRef A ViewContainer referenciája, amelybe a komponenst szeretnénk beszúrni.
   * @param source Az Observable, amit be szeretnénk csomagolni.
   * @param clear Ha true, akkor a ViewContainer-t először kitakarítja, és csak utána szúrja be a komponenst. Alapértelmezetten false.
   */
  public withLoadingInView$<T>(
    viewContainerRef: ViewContainerRef,
    source: Observable<T>,
    clear = false,
  ): Observable<T> {
    return timer(1).pipe(
      switchMap(() => {
        const componentFactory =
          this.componentFactoryResolver.resolveComponentFactory(LoadingComponent);

        if (clear) {
          viewContainerRef.clear();
        }
        const componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.isEmbedded = true;

        return source.pipe(
          finalize(() => viewContainerRef.remove(viewContainerRef.indexOf(componentRef.hostView))),
        );
      }),
    );
  }
}
