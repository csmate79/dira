import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { AuthenticationController } from 'src/app/authentication/controllers/authentication.controller';
import { ValidationDataType } from 'src/app/authentication/enums/validation-data-type.enum';
import { CompanyType } from 'src/app/shared/enums/company-type.enum';
import { Language } from 'src/app/shared/enums/language.enum';
import { PartnerTitle } from 'src/app/shared/enums/partner-title.enum';
import { PartnerType } from 'src/app/shared/enums/partner-type.enum';
import { IAutocompleteRequest } from 'src/app/shared/interfaces/autocomplete/autocomplete-request.interface';
import { IAutocompleteResponse } from 'src/app/shared/interfaces/autocomplete/autocomplete-response.interface';
import { IAutocompleteResult } from 'src/app/shared/interfaces/autocomplete/autocomplete-result.interface';
import {
  emailRegex,
  phoneNumberRegex,
  nameWithSpaceRegex,
  nameWithoutSpaceRegex,
  companyNameWithSpaceRegex,
} from 'src/app/shared/validators/custom.validator';
import { partnerDataValidator } from 'src/app/shared/validators/partner-data.validator';
import { IUsageType } from 'src/app/partner/interfaces/usage-type.interface';
import { UsageTypeController } from 'src/app/partner/controllers/usage-type.controller';
import { tap } from 'rxjs/operators';
import { CompanyController } from '../../../../company/controllers/company.controller';
import { ICompany } from '../../../../company/interfaces/company.interface';
import { disableFgFields } from '../../../../shared/utils/form-util';

@Component({
  selector: 'app-partner-data-step',
  templateUrl: './partner-data-step.component.html',
  styleUrls: ['./partner-data-step.component.scss'],
})
export class PartnerDataStepComponent implements OnChanges {
  @Input()
  public partnerType!: PartnerType;

  public readonly PartnerTypeEnum = PartnerType;

  public readonly TitleEnum = PartnerTitle;

  public readonly LanguageEnum = Language;

  public readonly CompanyTypeEnum = CompanyType;

  public companyAutocompleteFunction!: (
    req: IAutocompleteRequest,
  ) => Observable<IAutocompleteResponse>;

  public disableFields: { [key in PartnerType]: string[] } = {
    SUPERADMIN: ['companyId', 'name', 'companyType', 'company', 'usageTypes'],
    EXPERT_ADMIN: ['companyId', 'name', 'companyType', 'company', 'usageTypes'],
    PRIVATE_CUSTOMER: ['companyId', 'name', 'companyType', 'company'],
    MAIN_ACCOUNT_OWNER: [], // TODO Igényfelmérés, tervezés szükséges
    CORPORATE_CUSTOMER: ['name', 'companyType', 'usageTypes'],
    CORPORATE_CUSTOMER_ADMIN: ['name', 'companyType', 'usageTypes'],
    PUBLIC_INSTITUTION_CUSTOMER: ['name', 'companyType', 'usageTypes'],
    PUBLIC_INSTITUTION_CUSTOMER_ADMIN: ['name', 'companyType', 'usageTypes'],
    COMPANY: ['title', 'firstName', 'lastName', 'companyId', 'company', 'language'],
  };

  public partnerDataFg: UntypedFormGroup;

  public companyResults$: Observable<ICompany[]>;

  public companyValueChange?: Subscription;

  public companyTypeValueChange?: Subscription;

  public allUsageTypeForPartner$: Observable<IUsageType[]> = of([]);

  constructor(
    private authenticationController: AuthenticationController,
    private companyController: CompanyController,
    private formBuilder: UntypedFormBuilder,
    public router: Router,
    private usageTypeController: UsageTypeController,
  ) {
    this.partnerDataFg = formBuilder.group({
      email: [
        null,
        [Validators.required, Validators.pattern(emailRegex)],
        [partnerDataValidator(ValidationDataType.EMAIL, this.authenticationController)],
      ],
      phoneNumber: [null, [Validators.pattern(phoneNumberRegex)]],
      title: [null],
      firstName: [null, [Validators.required, Validators.pattern(nameWithSpaceRegex)]],
      lastName: [null, [Validators.required, Validators.pattern(nameWithoutSpaceRegex)]],
      language: [null, [Validators.required]],
      company: [null],
      companyName: [null],
      companyId: [null],
      name: [
        null,
        [Validators.required, Validators.pattern(companyNameWithSpaceRegex)],
        [partnerDataValidator(ValidationDataType.COMPANY_NAME, this.authenticationController)],
      ],
      companyType: [null],
      usageTypes: [null, [Validators.required]],
    });
    this.companyResults$ = of([]);
    this.companyValueChange = this.partnerDataFg
      .get('company')
      ?.valueChanges.subscribe((value: IAutocompleteResult) => {
        if (value) {
          this.partnerDataFg.get('companyId')?.setValue(value.id);
          this.partnerDataFg.get('companyName')?.setValue(value.value);
        }
      });
    if (this.router.getCurrentNavigation()?.extras.state?.companyId) {
      this.partnerDataFg.get('company')?.setValue({
        id: this.router.getCurrentNavigation()?.extras.state?.companyId as string,
        value: this.router.getCurrentNavigation()?.extras.state?.name as string,
      });
    }
    this.companyTypeValueChange = this.partnerDataFg
      .get('companyType')
      ?.valueChanges.pipe(
        tap((value) => {
          this.allUsageTypeForPartner$ = this.usageTypeController.getUsageTypeByPartnerType(
            value as CompanyType,
          );
        }),
      )
      .subscribe();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.partnerType?.currentValue) {
      if (
        ([PartnerType.CORPORATE_CUSTOMER, PartnerType.CORPORATE_CUSTOMER_ADMIN].includes(
          changes.partnerType?.currentValue as PartnerType,
        ) &&
          [
            PartnerType.PUBLIC_INSTITUTION_CUSTOMER,
            PartnerType.PUBLIC_INSTITUTION_CUSTOMER_ADMIN,
          ].includes(changes.partnerType?.previousValue as PartnerType)) ||
        ([
          PartnerType.PUBLIC_INSTITUTION_CUSTOMER,
          PartnerType.PUBLIC_INSTITUTION_CUSTOMER_ADMIN,
        ].includes(changes.partnerType?.currentValue as PartnerType) &&
          [PartnerType.CORPORATE_CUSTOMER, PartnerType.CORPORATE_CUSTOMER_ADMIN].includes(
            changes.partnerType?.previousValue as PartnerType,
          ))
      ) {
        this.partnerDataFg.get('company')?.setValue(null);
      }
      this.companyAutocompleteFunction = (req: IAutocompleteRequest) =>
        this.companyController.getCompaniesAutocomplete(
          req,
          changes.partnerType?.currentValue as PartnerType,
        );
      this.allUsageTypeForPartner$ = this.usageTypeController.getUsageTypeByPartnerType(
        this.partnerType,
      );
      disableFgFields(
        this.partnerDataFg,
        this.disableFields[changes.partnerType.currentValue as PartnerType],
      );
    }
  }

  get isBusinessPartner() {
    return AuthenticationController.isBusinessPartner(this.partnerType);
  }
}
