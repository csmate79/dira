import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from './shared/enums/language.enum';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'dira';

    constructor(private translateService: TranslateService) {}

    ngOnInit(): void {
        const lang = localStorage.getItem('language');
        if (lang) {
            this.translateService.use(lang);
        } else {
            localStorage.setItem('language', Language.HUN);
            this.translateService.use(Language.HUN);
        }
    }
}
