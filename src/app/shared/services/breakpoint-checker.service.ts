import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class BreakpointService implements OnDestroy {
    private _windowSize: BehaviorSubject<number> = new BehaviorSubject(
        window.innerWidth,
    );
    private _subscription: Subscription;

    constructor() {
        this._subscription = this.onResize().subscribe((size) => {
            this._windowSize.next(size);
        });
    }

    ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }

    get windowSize(): Observable<number> {
        return this._windowSize.asObservable();
    }

    private onResize(): Observable<number> {
        return new Observable<number>((observer) => {
            const resizeEvent = () => observer.next(window.innerWidth);
            window.addEventListener('resize', resizeEvent);
            return () => window.removeEventListener('resize', resizeEvent);
        }).pipe(debounceTime(200));
    }

    public isBreakpoint(breakpoint: number): boolean {
        let result = false;
        this._windowSize
            .subscribe((size) => {
                result = size <= breakpoint;
            })
            .unsubscribe();
        return result;
    }
}
