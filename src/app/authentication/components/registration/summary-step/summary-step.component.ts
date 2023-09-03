import { Component, Input } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { IRegistrationSummary } from 'src/app/authentication/interfaces/registration-summary.interface';
import { PartnerType } from 'src/app/shared/enums/partner-type.enum';
import { AuthenticationController } from '../../../controllers/authentication.controller';

@Component({
  selector: 'app-summary-step',
  templateUrl: './summary-step.component.html',
  styleUrls: ['./summary-step.component.scss'],
})
export class SummaryStepComponent {
  public readonly PartnerTypeEnum = PartnerType;

  public summaryFg: UntypedFormGroup;

  @Input()
  public summary!: Partial<IRegistrationSummary>;

  public termsAccepted = false;

  constructor(public fb: UntypedFormBuilder) {
    this.summaryFg = fb.group({
      termsAccepted: [false],
    });
  }

  get isBusinessPartner(): boolean {
    return AuthenticationController.isBusinessPartner(this.summary.partnerType);
  }
}
