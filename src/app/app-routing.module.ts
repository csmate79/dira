import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const lazyImports = {
    Landing: () => import('./landing/landing.module').then((module) => module.LandingModule),
    Authentication: () =>
      import('./authentication/authentication.module').then((module) => module.AuthenticationModule),
  };

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
