import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from '../authentication/guards/authentication.guard';
import { InstructorCreateComponent } from './components/instructor-create/instructor-create/instructor-create.component';

const routes: Routes = [
    {
        path: '',
        component: InstructorCreateComponent,
        data: {},
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InstructorRoutingModule { }
