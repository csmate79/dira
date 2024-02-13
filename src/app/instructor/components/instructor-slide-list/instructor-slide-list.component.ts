import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../../services/instructor.service';
import { Observable } from 'rxjs';
import { IInstructorData } from '../../interfaces/instructor.interface';
import { Router } from '@angular/router';
import { ModuleUrlEnum } from 'src/app/shared/enums/url/module-url.enum';
import { CommonUrlEnum } from 'src/app/shared/enums/url/common-url.enum';

@Component({
    selector: 'app-instructor-slide-list',
    templateUrl: './instructor-slide-list.component.html',
    styleUrls: ['./instructor-slide-list.component.scss']
})
export class InstructorSlideListComponent implements OnInit {
    public instructorList: Observable<IInstructorData[]>;

    public readonly slideConfig = { "slidesToShow": 3, "slidesToScroll": 1 };

    constructor(private instructorService: InstructorService, private router: Router) { }

    ngOnInit(): void {
        this.instructorList = this.instructorService.getInstructorList();
        this.instructorList.subscribe(res => console.log(res))
    }

    public navigateToInstructor(instructor: IInstructorData) {
        this.router.navigate([`${ModuleUrlEnum.INSTRUCTOR}/${CommonUrlEnum.SHOW}/${instructor.id}`]);
    }
}
