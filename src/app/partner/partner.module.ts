import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PartnerCardComponent } from '../shared/components/partner-card/partner-card.component';
import { PartnerRoutingModule } from './partner-routing.module';


@NgModule({
    declarations: [],
    imports: [PartnerRoutingModule, SharedModule],
})
export class PartnerModule { }
