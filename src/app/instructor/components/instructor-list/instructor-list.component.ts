import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../../services/instructor.service';
import { Observable } from 'rxjs';
import { IInstructorData } from '../../interfaces/instructor.interface';

@Component({
    selector: 'app-instructor-list',
    templateUrl: './instructor-list.component.html',
    styleUrls: ['./instructor-list.component.scss']
})
export class InstructorListComponent implements OnInit {
    public instructorList: Observable<IInstructorData[]>;

    public readonly slideConfig = { "slidesToShow": 3, "slidesToScroll": 1 };

    constructor(private instructorService: InstructorService) { }

    ngOnInit(): void {
        this.instructorList = this.instructorService.getInstructorList();
        this.instructorList.subscribe(res => console.log(res))
    }
}
