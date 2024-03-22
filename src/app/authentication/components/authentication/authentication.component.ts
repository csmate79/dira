import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
    public selectedTabIndex: number = 0;

    constructor(private dialogRef: MatDialogRef<AuthenticationComponent>) {}

    closeDialog() {
        this.dialogRef.close();
    }

    public tabChange(event: any) {
        this.selectedTabIndex = event.index;
    }
}
