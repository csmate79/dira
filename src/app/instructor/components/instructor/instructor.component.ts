import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClickEvent } from 'angular-star-rating';
import { Subscription, tap } from 'rxjs';
import { IInstructorData } from 'src/app/instructor/interfaces/instructor.interface';
import { BreakPointsEnum } from 'src/app/shared/enums/breakpoints.enum';
import { BreakpointService } from 'src/app/shared/services/breakpoint-checker.service';
import { InstructorRatingService } from '../../services/instructor-rating.service';
import { InstructorService } from '../../services/instructor.service';

@Component({
    selector: 'app-instructor',
    templateUrl: './instructor.component.html',
    styleUrls: ['./instructor.component.scss'],
    animations: [
        trigger('inOutAnimationDesktop', [
            transition(':enter', [
                style({ width: 0, opacity: 0 }),
                animate('0.5s ease-out', style({ width: '300px', opacity: 1 })),
            ]),
            transition(':leave', [
                style({ width: '300px', opacity: 1 }),
                animate('0.5s ease-in', style({ width: 0, opacity: 0 })),
            ]),
        ]),
        trigger('inOutAnimationMobile', [
            transition(':enter', [
                style({ height: 0, opacity: 0 }),
                animate(
                    '0.5s ease-out',
                    style({ height: '300px', opacity: 1 }),
                ),
            ]),
            transition(':leave', [
                style({ height: '300px', opacity: 1 }),
                animate('0.5s ease-in', style({ height: 0, opacity: 0 })),
            ]),
        ]),
    ],
})
export class InstructorComponent implements OnInit, OnDestroy {
    private routeSub: Subscription;
    private instructorId: string;
    public instructorData: IInstructorData;

    public showCreatingSection = signal(false);

    public reviewFg: FormGroup;

    public isMobile = false;

    constructor(
        private route: ActivatedRoute,
        private instructorService: InstructorService,
        private formBuilder: FormBuilder,
        private instructorRatingService: InstructorRatingService,
        private breakpointService: BreakpointService,
    ) {
        this.reviewFg = formBuilder.group({
            tariff: [null],
            instructorSkillsRatingValue: [null],
            personalityRatingValue: [null],
        });
    }

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
        this.breakpointService.windowSize.subscribe(() => {
            this.isMobile = this.breakpointService.isBreakpoint(
                BreakPointsEnum.TABLET,
            );
        });
    }

    ngOnDestroy(): void {
        this.routeSub.unsubscribe();
    }

    public newReview() {
        this.showCreatingSection.set(!this.showCreatingSection());
    }

    public createNewReview() {
        console.log(this.reviewFg.getRawValue());
        this.instructorRatingService
            .postCreateNewRating(this.instructorId, this.reviewFg.getRawValue())
            .pipe(
                tap(() => {
                    this.reviewFg.reset();
                    this.showCreatingSection.set(!this.showCreatingSection());
                }),
            )
            .subscribe();
    }

    public onClickInstructorSkills(event: ClickEvent) {
        console.log(event);
        this.reviewFg.patchValue({
            instructorSkillsRatingValue: event.rating,
        });
    }

    public onClickPersonality(event: ClickEvent) {
        this.reviewFg.patchValue({
            personalityRatingValue: event.rating,
        });
    }
}
