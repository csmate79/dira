import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegistrationComponent,
        AuthenticationComponent
    ],
    imports: [AuthenticationRoutingModule, SharedModule],
    exports: [],
})
export class AuthenticationModule { }
