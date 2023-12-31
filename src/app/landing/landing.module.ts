import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
    declarations: [LandingPageComponent],
    imports: [LandingRoutingModule, SharedModule],
})
export class LandingModule { }
