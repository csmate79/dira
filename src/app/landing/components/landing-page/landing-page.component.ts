import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationStateController } from 'src/app/authentication/controllers/authentication-state.controller';
import { tap } from 'rxjs/operators';
import { PartnerType } from 'src/app/shared/enums/partner-type.enum';
import { Right } from '../../../shared/enums/right.enum';
import { ISecurityUser } from '../../../authentication/interfaces/security-user.interface';
import { ModuleUrlEnum } from '../../../shared/enums/module-url.enum';
import { LandingUrlEnum } from '../../enums/landing-url.enum';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
    public user$: Observable<ISecurityUser | null>;

    public Right = Right;


    public unitCount = 0;

    public transactionCount = 0;

    public receivedNotificationCount = 0;

    public outgoingNotificationCount = 0;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private authStateController: AuthenticationStateController,
    ) {
        this.user$ = this.authStateController.user$;
    }

    ngOnInit(): void {
    }

    public navigateToInstructorCreation(): void {
        console.log('asdasd');
        this.router.navigate([ModuleUrlEnum.CREATE_NEW_INSTRUCTOR]);
    }
}
