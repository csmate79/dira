import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
    declarations: [
    ],
    imports: [AuthenticationRoutingModule, SharedModule],
    exports: [],
})
export class AuthenticationModule { }
