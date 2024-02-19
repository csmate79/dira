import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    public loginFg: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.loginFg = this.fb.group({
            email: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }
}
