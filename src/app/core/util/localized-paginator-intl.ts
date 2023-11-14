/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateParser, TranslateService } from '@ngx-translate/core';

@Injectable()
export class LocalizedPaginatorIntl extends MatPaginatorIntl {
    private rangeLabelIntl!: string;

    constructor(
        private translateService: TranslateService,
        private translateParser: TranslateParser,
    ) {
        super();
        this.getTranslations();
        this.translateService.onLangChange.subscribe(() => this.getTranslations());
    }

    private getTranslations(): void {
        this.translateService
            .get([
                'COMMON.PAGINATOR.ITEMS_PER_PAGE',
                'COMMON.PAGINATOR.FIRST_PAGE',
                'COMMON.PAGINATOR.PREVIOUS_PAGE',
                'COMMON.PAGINATOR.NEXT_PAGE',
                'COMMON.PAGINATOR.LAST_PAGE',
                'COMMON.PAGINATOR.RANGE',
            ])
            .subscribe((values: Record<string, string>) => {
                this.itemsPerPageLabel = values['COMMON.PAGINATOR.ITEMS_PER_PAGE'];
                this.firstPageLabel = values['COMMON.PAGINATOR.FIRST_PAGE'];
                this.previousPageLabel = values['COMMON.PAGINATOR.PREVIOUS_PAGE'];
                this.nextPageLabel = values['COMMON.PAGINATOR.NEXT_PAGE'];
                this.lastPageLabel = values['COMMON.PAGINATOR.LAST_PAGE'];
                this.rangeLabelIntl = values['COMMON.PAGINATOR.RANGE'];
                this.changes.next();
            });
    }

    public override getRangeLabel = (page: number, pageSize: number, length: number) => {
        const maxLength = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex =
            startIndex < maxLength ? Math.min(startIndex + pageSize, maxLength) : startIndex + pageSize;
        return this.translateParser.interpolate(this.rangeLabelIntl, {
            startIndex: startIndex + 1,
            endIndex,
            length: maxLength,
        })!;
    };
}
