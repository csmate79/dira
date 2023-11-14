import { Component, Input, OnDestroy, Optional, PipeTransform } from '@angular/core';
import { FormGroupDirective, NgControl, NgForm, UntypedFormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BaseComponentDirective } from '../../directives/base-component.directive';
import { ISelectDataSource } from '../../interfaces/select-data-source.interface';
import { IAutocompleteResult } from '../../interfaces/autocomplete-result.interface';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
})
export class SelectComponent extends BaseComponentDirective implements OnDestroy {
    @Input() disableDefaultOption = false;

    @Input() valueAsArray = false;

    @Input() multiple = false;

    @Input() dataSource!: ISelectDataSource[] | null;

    @Input() pipe: PipeTransform;

    private controlValueChange: Subscription;

    constructor(
        protected override fb: UntypedFormBuilder,
        public override ngControl: NgControl,
        @Optional() protected override ngForm: NgForm,
        @Optional() protected override formGroupDirective: FormGroupDirective,
    ) {
        super(fb, ngControl, ngForm, formGroupDirective);
        this.controlValueChange = this.control.valueChanges
            .pipe(
                tap((val: string | null | IAutocompleteResult | File) => {
                    if (this.valueAsArray) this.setValue([val as string]);
                    else this.setValue(val);
                }),
            )
            .subscribe();
    }

    ngOnDestroy() {
        this.controlValueChange.unsubscribe();
    }

    onClosed() {
        this.onTouch();
    }
}
