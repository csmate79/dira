import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { InstructorCreateComponent } from './components/instructor-create/instructor-create.component';
import { InstructorRoutingModule } from './instructor-routing.module';
import { InstructorComponent } from './components/instructor/instructor.component';

@NgModule({
    declarations: [InstructorCreateComponent, InstructorComponent],
    imports: [InstructorRoutingModule, SharedModule],
})
export class InstructorModule { }
