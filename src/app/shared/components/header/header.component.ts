import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationController } from 'src/app/authentication/controllers/authentication.controller';
import { dropdownAnimation } from '../../animations/dropdown.animation';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: [dropdownAnimation],
})
export class HeaderComponent {
    public sideMenuToggler = signal(false);

    constructor(
        private authenticationController: AuthenticationController,
        private router: Router,
    ) {}

    public openRegistrationDialog() {
        this.authenticationController.openRegistrationDialog();
    }

    public navigateToHome() {
        this.router.navigate(['']);
    }

    public toggleSideMenu() {
        if (this.sideMenuToggler()) {
            this.sideMenuToggler.set(false);
        } else {
            this.sideMenuToggler.set(true);
        }
    }

    public openAuth() {
        this.authenticationController.openRegistrationDialog();
    }
}
