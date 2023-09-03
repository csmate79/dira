import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { sha512 } from 'js-sha512';
import { Subscription } from 'rxjs';
import { debounceTime, first, tap } from 'rxjs/operators';
import { LoadingController } from 'src/app/shared/controllers/loading.controller';
import { NotificationController } from 'src/app/shared/controllers/notification.controller';
import { NgxPermissionsService } from 'ngx-permissions';
import { debounceTimes } from 'src/app/shared/utils/times';
import { Location } from '@angular/common';
import { NotificationType } from '../../../shared/enums/notification-type.enum';
import { AuthenticationController } from '../../controllers/authentication.controller';
import { IRegistrationSummary } from '../../interfaces/registration-summary.interface';
import { ISecurityData } from '../../interfaces/security-data.interface';
import { PartnerDataStepComponent } from './partner-data-step/partner-data-step.component';
import { SecurityDataStepComponent } from './security-data-step/security-data-step.component';
import { IPartnerData } from '../../../shared/interfaces/partner-data.interface';
import { ModuleUrlEnum } from '../../../shared/enums/module-url.enum';
import { Right } from '../../../shared/enums/right.enum';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements AfterViewInit, OnDestroy {
  @ViewChild('stepper', { static: false })
  public stepper!: MatStepper;

  @ViewChild('securityDataStep', { static: false })
  public securityDataStep!: SecurityDataStepComponent;

  @ViewChild('partnerDataStep', { static: false })
  public partnerDataStep!: PartnerDataStepComponent;

  public summary: Partial<IRegistrationSummary> = {};

  private subscriptions: Subscription[] = [];

  constructor(
    private authenticationController: AuthenticationController,
    private loadingController: LoadingController,
    private notificationController: NotificationController,
    private router: Router,
    private permissionsService: NgxPermissionsService,
    private location: Location,
  ) {}

  public ngAfterViewInit(): void {
    this.subscriptions.push(
      this.stepper.selectionChange.pipe(debounceTime(debounceTimes.sm)).subscribe(() => {
        if (this.securityDataStep) {
          this.summary = {
            ...this.summary,
            ...(this.securityDataStep.securityDataFg.value as Partial<IRegistrationSummary>),
          };
        }
        if (this.partnerDataStep) {
          this.summary = {
            ...this.summary,
            ...(this.partnerDataStep.partnerDataFg.value as Partial<IRegistrationSummary>),
          };
        }
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  public async onClickRegister(): Promise<void> {
    const securityData = {
      username: this.summary.username,
      password: sha512(this.summary.password!),
    } as ISecurityData;
    const partnerData = {
      partnerType: this.summary.partnerType,
      ...this.partnerDataStep.partnerDataFg.value,
    } as IPartnerData;
    const isAdmin = await this.permissionsService.hasPermission([Right.ADMIN_PARTNER_CREATE]);
    const registerFunction = (
      isAdmin
        ? this.authenticationController.registerUserByAdmin
        : this.authenticationController.registerUser
    ).bind(this.authenticationController);
    this.loadingController
      .withLoading$(registerFunction({ securityData, partnerData }))
      .pipe(
        first(),
        tap(() => {
          this.router.navigate([isAdmin ? ModuleUrlEnum.LANDING : ModuleUrlEnum.AUTH]);
          this.notificationController.showTranslatedMessage(
            NotificationType.SUCCESS,
            'REGISTRATION_SUCCESSFUL',
          );
        }),
      )
      .subscribe();
  }

  public back(): void {
    this.location.back();
  }
}
