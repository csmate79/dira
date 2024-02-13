import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InstructorCreateComponent } from './components/instructor-create/instructor-create.component';
import { CommonUrlEnum } from '../shared/enums/url/common-url.enum';
import { InstructorComponent } from './components/instructor/instructor.component';

const routes: Routes = [
    {
        path: CommonUrlEnum.NEW,
        component: InstructorCreateComponent,
        data: {},
    },
    {
        path: `${CommonUrlEnum.SHOW}/:id`,
        component: InstructorComponent,
        data: {},
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InstructorRoutingModule { }
