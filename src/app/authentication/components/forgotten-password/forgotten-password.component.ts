import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NotificationController } from 'src/app/shared/controllers/notification.controller';
import { ModuleUrlEnum } from 'src/app/shared/enums/module-url.enum';
import { NotificationType } from 'src/app/shared/enums/notification-type.enum';
import { ParentErrorMatcher } from 'src/app/shared/utils/parent-error-matcher';
import { confirmValidator } from 'src/app/shared/validators/confirm.validator';
import { emailRegex, passwordRegex } from 'src/app/shared/validators/custom.validator';
import { AuthenticationController } from '../../controllers/authentication.controller';
import { PasswordModeEnum } from '../../enums/password-mode.enum';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.scss'],
})
export class ForgottenPasswordComponent implements OnInit {
  public token: string | null = null;

  public emailFg: UntypedFormGroup;

  public newPasswordFg: UntypedFormGroup;

  public passwordMode?: PasswordModeEnum;

  public parentErrorMatcher = new ParentErrorMatcher('confirmInvalid');

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationController: AuthenticationController,
    private notificationController: NotificationController,
  ) {
    this.emailFg = this.fb.group({
      email: [null, [Validators.required, Validators.pattern(emailRegex)]],
    });
    this.newPasswordFg = this.fb.group(
      {
        password: [null, [Validators.required, Validators.pattern(passwordRegex)]],
        confirmPassword: [null, [Validators.required]],
      },
      {
        validators: [confirmValidator('password', 'confirmPassword')],
      },
    );
  }

  ngOnInit(): void {
    this.newPasswordFg.disable();
    this.token = this.route.snapshot.paramMap.get('token');
    if (this.token) {
      this.authenticationController
        .forgottenPasswordTokenValidityCheck(this.token)
        .pipe(
          tap((success) => {
            if (!success) {
              this.router.navigate([ModuleUrlEnum.AUTH]);
              this.notificationController.showTranslatedMessage(
                NotificationType.ERROR,
                'LINK_INVALID',
              );
            } else {
              this.newPasswordFg.enable();
            }
          }),
        )
        .subscribe();
    }
    this.passwordMode = this.token
      ? PasswordModeEnum.CHANGING_PASSWORD
      : PasswordModeEnum.FORGOTTEN_PASSWORD;
  }

  public sendEmail(): void {
    this.authenticationController
      .forgottenPasswordSendEmail(this.emailFg.get('email')?.value as string)
      .pipe(
        tap(() =>
          this.notificationController.showTranslatedMessage(
            NotificationType.SUCCESS,
            'PASSWORD_RESET_EMAIL_SUCCESS',
          ),
        ),
        tap(() => this.navigateToLogin()),
        catchError(() => {
          this.notificationController.showTranslatedMessage(
            NotificationType.ERROR,
            'PASSWORD_RESET_EMAIL_FAILED',
          );
          return of(null);
        }),
      )
      .subscribe();
  }

  public changePassword(): void {
    if (this.token) {
      this.authenticationController
        .changePassword(this.newPasswordFg.get('password')?.value as string, this.token)
        .pipe(
          tap(() =>
            this.notificationController.showTranslatedMessage(
              NotificationType.SUCCESS,
              'PASSWORD_CHANGE_SUCCESS',
            ),
          ),
          tap(() => this.navigateToLogin()),
        )
        .subscribe();
    }
  }

  public navigateToLogin(): void {
    this.router.navigate([ModuleUrlEnum.AUTH]);
  }
}
