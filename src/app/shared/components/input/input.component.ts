import { Component, Input, OnDestroy, Optional } from '@angular/core';
import { FormBuilder, FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BaseComponentDirective } from '../../directives/base-component.directive';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent extends BaseComponentDirective implements OnDestroy {
    @Input() type = 'text';

    @Input() isNumeric = false;

    @Input() suffixIcon = '';

    @Input() hint = '';

    @Input() disableDefaultErrorMessages = false;

    @Input() maxLength: number | null = null;

    public maskConfig?: {
        imask?: IMask.AnyMaskedOptions;
        unmask?: boolean | 'typed';
    };

    private controlValueChange: Subscription;

    constructor(
        protected override fb: FormBuilder,
        public override ngControl: NgControl,
        @Optional() protected override ngForm: NgForm,
        @Optional() protected override formGroupDirective: FormGroupDirective,
    ) {
        super(fb, ngControl, ngForm, formGroupDirective);
        this.controlValueChange = this.control.valueChanges
            .pipe(
                tap((val) => this.setValue(val)),
            )
            .subscribe();
    }

    ngOnDestroy() {
        this.controlValueChange.unsubscribe();
    }

    onBlur() {
        this.onTouch();
    }

    hasErrorDefinition(definition: string): boolean {
        return this.errors.some((error) => error.error === definition);
    }

    getMaximumLength(): number {
        return this.maxLength ?? 524288;
    }
}
