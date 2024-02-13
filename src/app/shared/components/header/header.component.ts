import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationController } from 'src/app/authentication/controllers/authentication.controller';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(private authenticationController: AuthenticationController, private router: Router) { }

    public openRegistrationDialog() {
        this.authenticationController.openRegistrationDialog();
    }

    public navigateToHome() {
        this.router.navigate(['']);
    }
}
