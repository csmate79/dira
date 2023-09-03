import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from 'src/app/shared/controllers/loading.controller';
import { TranslateController } from 'src/app/shared/controllers/translate.controller';
import { Language } from 'src/app/shared/enums/language.enum';
import { APP_CONFIG } from 'src/app/shared/utils/app-config';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthenticationController } from '../../controllers/authentication.controller';
import { AuthenticationUrlEnum } from '../../enums/authentication-url.enum';
import { ModuleUrlEnum } from '../../../shared/enums/module-url.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public readonly LanguageEnum = Language;

  public readonly logoUrl = APP_CONFIG.logoUrl;

  public loginForm: UntypedFormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private controller: AuthenticationController,
    private loadingController: LoadingController,
    private translateController: TranslateController,
    private fb: UntypedFormBuilder,
  ) {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  public onLogin(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.loginForm.disable();
    this.loadingController
      .withLoading$(
        this.controller.login(
          this.loginForm.get('username')?.value as string,
          this.loginForm.get('password')?.value as string,
        ),
      )
      .pipe(
        tap(() => {
          const redirectUrl = this.route.snapshot.queryParamMap.get('redirectUrl');
          if (redirectUrl && redirectUrl !== '/' + ModuleUrlEnum.AUTH && redirectUrl !== '/') {
            this.router.navigate([redirectUrl]);
          } else {
            this.router.navigate([ModuleUrlEnum.LANDING]);
          }
        }),
        catchError((error) => {
          this.loginForm.enable();
          return throwError(error);
        }),
      )
      .subscribe();
  }

  public changeLanguage(language: Language): void {
    this.translateController.use(language);
  }

  public navigateToForgottenPassword(): void {
    this.router.navigate([ModuleUrlEnum.AUTH, AuthenticationUrlEnum.PASSWORD_CHANGE]);
  }
}
