import { Component, Input } from '@angular/core';
import { IInstructorData } from 'src/app/instructor/interfaces/instructor.interface';

@Component({
    selector: 'app-instructor-card',
    templateUrl: './instructor-card.component.html',
    styleUrls: ['./instructor-card.component.scss']
})
export class InstructorCardComponent {
    @Input() instructorData: IInstructorData;
}
