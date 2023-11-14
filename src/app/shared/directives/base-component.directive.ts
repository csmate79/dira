import { Directive, Input, OnChanges, Optional, SimpleChanges } from '@angular/core';
import {
    ControlValueAccessor,
    FormGroupDirective,
    NgControl,
    NgForm,
    UntypedFormBuilder,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { IErrorMessageConfig } from '../interfaces/error-message-config.interface';
import { IAutocompleteResult } from '../interfaces/autocomplete-result.interface';
import { CustomErrorStateMatcher } from '../utils/custom-error-state-matcher';

@Directive({
    selector: '[appBaseComponent]',
})
export class BaseComponentDirective implements OnChanges, ControlValueAccessor {
    @Input() label = '';

    @Input() appearance: MatFormFieldAppearance = 'fill';

    @Input() required: boolean | string | undefined = false;

    @Input() errorMsgConfig: IErrorMessageConfig | null | undefined;

    public errorStateMatcher!: ErrorStateMatcher;

    public errors: MappedErrorMessageConfig[] = [];

    public _required = false;

    public control = this.fb.control(null);

    private controlValueAccessorChangeFn:
        | ((value: string | string[] | null | IAutocompleteResult | File) => void)
        | null = null;

    private controlValueAccessorTouchFn: (() => void) | null = null;

    constructor(
        protected fb: UntypedFormBuilder,
        public ngControl: NgControl,
        @Optional() protected ngForm: NgForm,
        @Optional() protected formGroupDirective: FormGroupDirective,
    ) {
        this.ngControl.valueAccessor = this;
        this.errorStateMatcher = new CustomErrorStateMatcher(
            this.ngControl,
            this.formGroupDirective || this.ngForm,
        );
    }

    ngOnChanges(changes: SimpleChanges): void {
        const requiredChanged = changes['required'];
        const errorMsgConfigChanged = changes['errorMsgConfig'];
        if (requiredChanged) {
            const value = requiredChanged.currentValue as boolean | string | undefined;
            this._required = value != null && value !== false && value !== 'false';
        }
        if (errorMsgConfigChanged) {
            const errors: MappedErrorMessageConfig[] = [];
            const configuration = errorMsgConfigChanged.currentValue as IErrorMessageConfig;
            if (configuration) {
                Object.entries(configuration).forEach((key) => {
                    if (typeof key[1] === 'string') {
                        errors.push(this.errorHandler(key[0], key[1]));
                    } else if (typeof key[1] === 'object' && key[1]?.message) {
                        errors.push(this.errorHandler(key[0], key[1]?.message));
                    }
                });
            }
            this.errors = errors;
        }
    }

    private errorHandler(
        key: string,
        value: string | { message: string; interpolateParams: string },
    ): MappedErrorMessageConfig {
        let data: MappedErrorMessageConfig;
        if (typeof value === 'string') {
            data = {
                error: key,
                message: value,
                interpolateParams: null,
            };
        } else {
            data = {
                error: key,
                message: value.message,
                interpolateParams: value.interpolateParams,
            };
        }
        return data;
    }

    setDisabledState(isDisabled: boolean): void {
        if (isDisabled) {
            this.control.disable({ emitEvent: false });
        } else {
            this.control.enable({ emitEvent: false });
        }
    }

    writeValue(obj: null | string | number | IAutocompleteResult): void {
        this.control.setValue(obj, { emitEvent: false });
    }

    registerOnChange(fn: (() => void) | null): void {
        this.controlValueAccessorChangeFn = fn;
    }

    registerOnTouched(fn: (() => void) | null): void {
        this.controlValueAccessorTouchFn = fn;
    }

    protected setValue(value: string | null | IAutocompleteResult | File | string[]) {
        if (this.controlValueAccessorChangeFn) {
            this.controlValueAccessorChangeFn(value);
        }
    }

    protected onTouch() {
        if (this.controlValueAccessorTouchFn) {
            this.controlValueAccessorTouchFn();
        }
    }
}

interface MappedErrorMessageConfig {
    error: string;
    message: string;
    interpolateParams: string | { message: string; interpolateParams: string } | null;
}
