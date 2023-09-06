import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationUrlEnum } from './enums/authentication-url.enum';
import { NoAuthenticationGuard } from './guards/no-authentication.guard';
import { RegistrationGuard } from './guards/registration.guard';

const routes: Routes = [
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthenticationRoutingModule { }
