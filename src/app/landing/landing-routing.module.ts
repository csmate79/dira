import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AuthenticationGuard } from '../authentication/guards/authentication.guard';
import { LandingUrlEnum } from './enums/landing-url.enum';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    canActivate: [AuthenticationGuard],
    data: { breadcrumb: { skip: true } },
  },
  {
    path: LandingUrlEnum.LOGOUT,
    component: LandingPageComponent,
    canActivate: [AuthenticationGuard],
    data: { breadcrumb: { skip: true } },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
