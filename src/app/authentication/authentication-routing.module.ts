import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivationComponent } from './components/activation/activation.component';
import { ForgottenPasswordComponent } from './components/forgotten-password/forgotten-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthenticationUrlEnum } from './enums/authentication-url.enum';
import { NoAuthenticationGuard } from './guards/no-authentication.guard';
import { RegistrationGuard } from './guards/registration.guard';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        canActivate: [NoAuthenticationGuard],
    },
    {
        path: AuthenticationUrlEnum.PASSWORD_CHANGE,
        component: ForgottenPasswordComponent,
        canActivate: [NoAuthenticationGuard],
    },
    {
        path: `${AuthenticationUrlEnum.PASSWORD_CHANGE}/:token`,
        component: ForgottenPasswordComponent,
        canActivate: [NoAuthenticationGuard],
    },
    {
        path: `${AuthenticationUrlEnum.ACTIVATION}/:token`,
        component: ActivationComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthenticationRoutingModule { }
