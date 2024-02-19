import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    public registrationFg: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.registrationFg = this.fb.group({
            email: ['', [Validators.required, Validators.minLength(3)]],
            username: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }
}
