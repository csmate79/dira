import { Component, forwardRef, HostBinding, Input, Optional } from '@angular/core';
import { ControlValueAccessor, FormGroupDirective, NG_VALUE_ACCESSOR, NgControl, NgForm, UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { BaseComponentDirective } from '../../directives/base-component.directive';
import { debounceTime, first, Observable, Subject, Subscription, switchMap, tap } from 'rxjs';
import { debounceTimes } from '../../utils/times';

@Component({
    selector: 'app-autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AutocompleteComponent),
            multi: true
        }
    ]
})
export class AutocompleteComponent extends BaseComponentDirective implements ControlValueAccessor {
    @Input() autocompleteFunction!: (
        request: any,
    ) => Observable<any>;

    @Input() optionFilter!: (results: any[]) => any[];

    @Input() getObject!: boolean;

    @Input() needFetch?: boolean;

    public comparator = (o1: any, o2: any) =>
        o1 && o2 && o1.id === o2.id;

    public dataSource: any[] = [];

    public onOpened = new Subject<string>();

    /**
     * Annak a jelzésére szolgál, hogy szükséges-e lekérni adatokat amikor kinyitjuk az autocompleteot
     * mivel ha írunk a controlba(writevalue állítja és az onSelectOpened használja) akkor, lehet,
     * hogy kattintásra új optionöket szeretnénk kapni
     */
    private shouldFetchWhenOpened = true;

    public searchControl = new UntypedFormControl(null);

    private controlValueChange: Subscription;

    private searchControlValueChange: Subscription;

    public additionalResults?: number;

    public isLoading = false;

    public noData = false;

    /**
     * Mindig az aktuálisan kiválasztott elem van benne(egy elemű tömb) mert ha objektum és úgy
     * hivatkozom a template oldali mat-optionbe akkor buggos
     */
    public selected: any[] = [];

    constructor(
        protected override fb: UntypedFormBuilder,
        public override ngControl: NgControl,
        @Optional() protected override ngForm: NgForm,
        @Optional() protected override formGroupDirective: FormGroupDirective
    ) {
        super(fb, ngControl, ngForm, formGroupDirective);
        this.controlValueChange = this.control.valueChanges
            .pipe(
                tap((val: any) => {
                    this.selected = [val];
                    let mappedValue = null;
                    if (val) {
                        mappedValue = this.getObject ? val : val.id;
                    }
                    this.setValue(mappedValue);
                }),
            )
            .subscribe();
        this.searchControlValueChange = this.searchControl.valueChanges
            .pipe(
                tap(() => {
                    this.isLoading = true;
                }),
                debounceTime(debounceTimes.lg),
                switchMap((filterValue: string) => this.getValues({ filterValue })),
                tap((response) => {
                    this.dataSource = response.results;
                    this.additionalResults = response.additionalResults;
                    this.isLoading = false;
                    this.noData = this.dataSource.length === 0;
                }),
            )
            .subscribe();
    }

    override writeValue(obj: any): void {
        let shouldFetch = true;
        if (typeof obj === 'object') {
            this.selected = [obj];
            this.control.setValue(obj, { emitEvent: false });
            const actualValue = this.control.value as any;
            shouldFetch = !(obj && actualValue && obj.id === actualValue.id);
        } else if (typeof obj === 'string') {
            this.findById(obj);
        } else {
            this.control.setValue(null, { emitEvent: false });
        }
        this.shouldFetchWhenOpened = this.needFetch ? this.needFetch : shouldFetch;
    }

    onClosed() {
        this.onTouch();
    }

    onSelectOpened() {
        if (this.shouldFetchWhenOpened) {
            this.searchControl.setValue('', { emitEvent: false });
            this.getValues({ filterValue: '' })
                .pipe(
                    first(),
                    tap((response) => {
                        this.dataSource = response.results;
                        this.additionalResults = response.additionalResults;
                        this.isLoading = false;
                    }),
                    tap(() => {
                        this.shouldFetchWhenOpened = this.needFetch ? this.needFetch : false;
                    }),
                )
                .subscribe();
        }
    }

    get filteredDataSource() {
        if (this.optionFilter) {
            return this.optionFilter(this.dataSource);
        }
        return this.dataSource;
    }

    private findById(id: string) {
        this.getValues({ id, filterValue: '' })
            .pipe(
                first(),
                tap((response) => {
                    this.selected = [response.results[0]];
                    this.control.setValue(response.results[0], { emitEvent: false });
                }),
            )
            .subscribe();
    }

    private getValues(searchParams: {
        filterValue?: string;
        id?: string;
    }): Observable<any> {
        const request = {
            searchParams: {
                maxResults: 5,
                ...searchParams,
            },
        };
        this.isLoading = true;
        return this.autocompleteFunction(request);
    }

}
