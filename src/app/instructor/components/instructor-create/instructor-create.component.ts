import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { InstructorAge } from 'src/app/instructor/enums/instructor-age.enum';
import { InstructorCarType } from 'src/app/instructor/enums/instructor-fuel-type.enum';
import { InstructorService } from 'src/app/instructor/services/instructor.service';
import { NotificationController } from 'src/app/shared/controllers/notification.controller';
import { NotificationType } from 'src/app/shared/enums/notification-type.enum';

@Component({
    selector: 'app-instructor-create',
    templateUrl: './instructor-create.component.html',
    styleUrls: ['./instructor-create.component.scss']
})
export class InstructorCreateComponent implements OnInit {
    public instructorForm: FormGroup;

    /** Language enum form érték beállításhoz */
    public readonly AgeGroupEnum = InstructorAge;

    public readonly InstructorCarTypeEnum = InstructorCarType;

    constructor(private fb: FormBuilder, private instructorService: InstructorService, private router: Router, private notificationController: NotificationController) {
        this.instructorForm = fb.group({
            name: [null],
            car: [null],
            ageGroup: [null],
            fuelType: [null],
            location: [null],
            school: [null]
        })
    }

    ngOnInit(): void {

    }

    public saveInstructor() {
        this.notificationController.showTranslatedMessage(NotificationType.SUCCESS, "COMMON.SUCCESSFUL_CREATION");
        this.instructorService.postCreateInstructor(this.instructorForm.getRawValue()).pipe(tap(res => {
            this.router.navigate(['']);
        })).subscribe();
    }
}
