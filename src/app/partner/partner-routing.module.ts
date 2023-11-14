import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnerCardComponent } from '../shared/components/partner-card/partner-card.component';
import { HasRightGuard } from '../authentication/guards/has-right.guard';
import { Right } from '../shared/enums/right.enum';
import { CommonUrlEnum } from '../shared/enums/common-url.enum';
import { CanDeactivateGuard } from '../shared/guards/can-deactivate.guard';

const routes: Routes = [
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PartnerRoutingModule { }
