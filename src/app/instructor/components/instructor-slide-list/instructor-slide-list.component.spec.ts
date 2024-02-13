import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorSlideListComponent } from './instructor-slide-list.component';

describe('InstructorListComponent', () => {
    let component: InstructorSlideListComponent;
    let fixture: ComponentFixture<InstructorSlideListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InstructorSlideListComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(InstructorSlideListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
