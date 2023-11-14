import { Directive, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UntypedFormBuilder, NgControl } from '@angular/forms';
import { InputComponent } from '../components/input/input.component';
import { masks } from '../validators/mask.validator';

@Directive({
    selector: '[appMaskConfig]',
})
export class MaskConfigDirective implements OnChanges, OnInit {
    @Input() maskConfig:
        | IMask.AnyMaskedOptions
        | 'percentMask'
        | 'multiplierMask'
        | 'numberMask'
        | 'daysMask'
        | 'currencyMask'
        | 'integerMask'
        | 'weightMask'
        | 'informationUnitNumberMask'
        | 'percentMask2Scale'
        | 'informationValueCompareMask'
        | 'minimumPriceMask'
        | 'emptyMask' = 'emptyMask';

    @Input() unmask: boolean | 'typed' = true;

    public inputComponent: InputComponent;

    constructor(private ngControl: NgControl, protected fb: UntypedFormBuilder) {
        this.inputComponent = ngControl.valueAccessor as InputComponent;
    }

    ngOnInit(): void {
        if (typeof this.maskConfig === 'string') {
            this.maskConfig = masks[this.maskConfig];
        }
        this.inputComponent.maskConfig = {
            imask: this.maskConfig,
            unmask: this.unmask,
        };
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['maskConfig']) {
            if (typeof this.maskConfig === 'string') {
                this.maskConfig = masks[this.maskConfig];
            }
            this.inputComponent.maskConfig = {
                ...this.inputComponent.maskConfig,
                imask: this.maskConfig,
            };
        }
        if (changes['unmask']) {
            this.inputComponent.maskConfig = {
                ...this.inputComponent.maskConfig,
                unmask: this.unmask,
            };
        }
    }
}
