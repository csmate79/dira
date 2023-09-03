import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationController } from 'src/app/authentication/controllers/authentication.controller';
import { ValidationDataType } from 'src/app/authentication/enums/validation-data-type.enum';
import { Right } from 'src/app/shared/enums/right.enum';
import { PartnerType } from 'src/app/shared/enums/partner-type.enum';
import { ParentErrorMatcher } from 'src/app/shared/utils/parent-error-matcher';
import { confirmValidator } from 'src/app/shared/validators/confirm.validator';
import { partnerDataValidator } from 'src/app/shared/validators/partner-data.validator';
import { ISelectDataSource } from 'src/app/shared/interfaces/select-data-source.interface';
import { AuthenticationStateController } from 'src/app/authentication/controllers/authentication-state.controller';
import { usernameRegex, passwordRegex } from 'src/app/shared/validators/custom.validator';
import { CompanyType } from '../../../../shared/enums/company-type.enum';
import { CorporatePartnerTypeEnum } from '../../../../shared/enums/corporate-partner-type.enum';
import { PublicInstitutionPartnerTypeEnum } from '../../../../shared/enums/public-institution-partner-type.enum';
import { NotificationType } from '../../../../shared/enums/notification-type.enum';
import { NotificationController } from '../../../../shared/controllers/notification.controller';

@Component({
  selector: 'app-security-data-step',
  templateUrl: './security-data-step.component.html',
  styleUrls: ['./security-data-step.component.scss'],
})
export class SecurityDataStepComponent {
  public PartnerType: object = PartnerType;

  public Right = Right;

  public parentErrorMatcher = new ParentErrorMatcher('confirmInvalid');

  public securityDataFg: UntypedFormGroup;

  public filterFn = (enumOptions: ISelectDataSource[]) =>
    enumOptions.filter((option) => option.value !== PartnerType.SUPERADMIN);

  constructor(
    public fb: UntypedFormBuilder,
    public router: Router,
    private authenticationController: AuthenticationController,
    private notificationController: NotificationController,
    private authStateController: AuthenticationStateController,
  ) {
    this.securityDataFg = fb.group(
      {
        username: [
          null,
          [Validators.required, Validators.pattern(usernameRegex)],
          [partnerDataValidator(ValidationDataType.USERNAME, this.authenticationController)],
        ],
        password: [null, [Validators.required, Validators.pattern(passwordRegex)]],
        confirmPassword: [null, [Validators.required, Validators.pattern(passwordRegex)]],
        partnerType: [PartnerType.PRIVATE_CUSTOMER, [Validators.required]],
      },
      {
        validators: [confirmValidator('password', 'confirmPassword')],
      },
    );
    if (this.authStateController.user$.getValue()?.partnerType === PartnerType.SUPERADMIN) {
      this.securityDataFg.get('partnerType')?.setValue(null);
    }
    const state = this.router.getCurrentNavigation()?.extras.state?.companyType as PartnerType;
    if (state) {
      if (state === PartnerType.COMPANY) {
        this.securityDataFg.get('partnerType')?.setValue(PartnerType.COMPANY);
      } else {
        this.setPartnerTypeEnum(
          this.router.getCurrentNavigation()?.extras.state?.companyType as CompanyType,
        );
      }
    }
  }

  private setPartnerTypeEnum(companyType: CompanyType): void {
    switch (companyType) {
      case CompanyType.CORPORATION:
        this.PartnerType = CorporatePartnerTypeEnum;
        break;
      case CompanyType.PUBLIC_INSTITUTION:
        this.PartnerType = PublicInstitutionPartnerTypeEnum;
        break;
      default:
        this.notificationController.showTranslatedMessage(
          NotificationType.ERROR,
          'INVALID_PARTNER_TYPE',
        );
    }
  }
}
