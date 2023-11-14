import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { InstructorCreateComponent } from './components/instructor-create/instructor-create/instructor-create.component';
import { InstructorRoutingModule } from './instructor-routing.module';

@NgModule({
    declarations: [InstructorCreateComponent],
    imports: [InstructorRoutingModule, SharedModule],
})
export class InstructorModule { }
