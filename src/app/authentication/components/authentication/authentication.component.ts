import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {
    constructor(private dialogRef: MatDialogRef<AuthenticationComponent>) { }

    closeDialog() {
        this.dialogRef.close();
    }
}
