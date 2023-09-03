import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NotificationController } from 'src/app/shared/controllers/notification.controller';
import { ModuleUrlEnum } from 'src/app/shared/enums/module-url.enum';
import { NotificationType } from 'src/app/shared/enums/notification-type.enum';
import { AuthenticationController } from '../../controllers/authentication.controller';

@Component({
  selector: 'app-activation',
  template: '',
})
export class ActivationComponent implements OnInit {
  private activationToken!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private notificationController: NotificationController,
    private authenticationController: AuthenticationController,
  ) {}

  ngOnInit(): void {
    this.activationToken = this.route.snapshot.params.token as string;
    this.authenticationController
      .activateUser(this.activationToken)
      .pipe(
        tap((res) => {
          this.router.navigate([ModuleUrlEnum.AUTH]);
          if (res) {
            this.notificationController.showTranslatedMessage(
              NotificationType.SUCCESS,
              'ACTIVATION_SUCCESSFUL',
            );
          } else {
            this.notificationController.showTranslatedMessage(
              NotificationType.ERROR,
              'LINK_INVALID',
            );
          }
        }),
        catchError((error) => {
          this.router.navigate([ModuleUrlEnum.AUTH]);
          return throwError(error);
        }),
      )
      .subscribe();
  }
}
