import { Component } from '@angular/core';
import { AuthenticationController } from 'src/app/authentication/controllers/authentication.controller';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(private authenticationController: AuthenticationController) { }

    public openRegistrationDialog() {
        this.authenticationController.openRegistrationDialog();
    }
}
