import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { PartnerDataStepComponent } from './components/registration/partner-data-step/partner-data-step.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SecurityDataStepComponent } from './components/registration/security-data-step/security-data-step.component';
import { SummaryStepComponent } from './components/registration/summary-step/summary-step.component';
import { ForgottenPasswordComponent } from './components/forgotten-password/forgotten-password.component';
import { ActivationComponent } from './components/activation/activation.component';

@NgModule({
  declarations: [
    LoginComponent,
    PartnerDataStepComponent,
    SecurityDataStepComponent,
    SummaryStepComponent,
    RegistrationComponent,
    ForgottenPasswordComponent,
    ActivationComponent,
  ],
  imports: [AuthenticationRoutingModule, SharedModule],
  exports: [PartnerDataStepComponent],
})
export class AuthenticationModule {}
