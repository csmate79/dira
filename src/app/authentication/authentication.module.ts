import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegistrationComponent
    ],
    imports: [AuthenticationRoutingModule, SharedModule],
    exports: [],
})
export class AuthenticationModule { }
