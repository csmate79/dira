import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonUrlEnum } from 'src/app/shared/enums/url/common-url.enum';
import { ModuleUrlEnum } from 'src/app/shared/enums/url/module-url.enum';
import { IInstructorData } from '../../interfaces/instructor.interface';
import { InstructorService } from '../../services/instructor.service';

@Component({
    selector: 'app-instructor-slide-list',
    templateUrl: './instructor-slide-list.component.html',
    styleUrls: ['./instructor-slide-list.component.scss'],
})
export class InstructorSlideListComponent implements OnInit {
    public instructorList: Observable<IInstructorData[]>;

    public readonly slideConfig = { slidesToShow: 3, slidesToScroll: 1 };

    constructor(
        private instructorService: InstructorService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.instructorList = this.instructorService.getInstructorList();
    }

    public navigateToInstructor(instructor: IInstructorData) {
        this.router.navigate([
            `${ModuleUrlEnum.INSTRUCTOR}/${CommonUrlEnum.SHOW}/${instructor.id}`,
        ]);
    }
}
