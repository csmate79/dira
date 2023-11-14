import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../../../partner/services/partner.service';
import { IPartnerData } from '../../interfaces/partner.interface';

@Component({
    selector: 'app-partner-card',
    templateUrl: './partner-card.component.html',
    styleUrls: ['./partner-card.component.scss']
})
export class PartnerCardComponent implements OnInit {

    public partners: IPartnerData;

    constructor(private partnerServie: PartnerService) { }

    ngOnInit(): void {
        this.partnerServie.getCurrentPartnerData().subscribe(res => this.partners = res);
    }
}
