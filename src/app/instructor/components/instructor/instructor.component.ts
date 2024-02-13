import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, tap } from 'rxjs';
import { IInstructorData } from 'src/app/instructor/interfaces/instructor.interface';
import { InstructorService } from '../../services/instructor.service';

@Component({
    selector: 'app-instructor',
    templateUrl: './instructor.component.html',
    styleUrls: ['./instructor.component.scss'],
})
export class InstructorComponent implements OnInit, OnDestroy {
    private routeSub: Subscription;
    private instructorId: string;
    public instructorData: IInstructorData;

    constructor(
        private route: ActivatedRoute,
        private instructorService: InstructorService,
    ) {}

    ngOnInit(): void {
        this.routeSub = this.route.params
            .pipe(
                tap((params) => {
                    this.instructorId = params['id'];
                    this.instructorService
                        .getInstructor(this.instructorId)
                        .pipe(
                            tap((res) => {
                                console.log(res);
                                this.instructorData = res;
                            }),
                        )
                        .subscribe();
                }),
            )
            .subscribe();
    }

    ngOnDestroy(): void {
        this.routeSub.unsubscribe();
    }
}
