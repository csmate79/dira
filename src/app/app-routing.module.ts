import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleUrlEnum } from './shared/enums/module-url.enum';

const lazyImports = {
    Landing: () => import('./landing/landing.module').then((module) => module.LandingModule),
    Authentication: () =>
        import('./authentication/authentication.module').then((module) => module.AuthenticationModule),
    Instructor: () => import('./instructor/instructor.module').then((module) => module.InstructorModule),
};

const routes: Routes = [
    {
        path: ModuleUrlEnum.LANDING,
        loadChildren: lazyImports.Landing,
        data: {},
    },
    {
        path: ModuleUrlEnum.CREATE_NEW_INSTRUCTOR,
        loadChildren: lazyImports.Instructor,
        data: {},
    },
    {
        path: '**',
        redirectTo: ModuleUrlEnum.LANDING,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
