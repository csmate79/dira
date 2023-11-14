import { ErrorStateMatcher } from '@angular/material/core';
import { UntypedFormControl, FormGroupDirective, NgControl, NgForm } from '@angular/forms';

export class CustomErrorStateMatcher extends ErrorStateMatcher {
    constructor(private ngControl: NgControl, private form: FormGroupDirective | NgForm | null) {
        super();
    }

    override isErrorState(): boolean {
        return super.isErrorState(this.ngControl?.control as UntypedFormControl, this.form);
    }
}
