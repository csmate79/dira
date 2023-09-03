// import {
//   MAT_MOMENT_DATE_ADAPTER_OPTIONS,
//   MatMomentDateAdapterOptions,
//   MomentDateAdapter,
// } from '@angular/material-moment-adapter';
// import { Inject, Injectable, OnDestroy, Optional } from '@angular/core';
// import { MAT_DATE_LOCALE } from '@angular/material/core';
// import { TranslateService } from '@ngx-translate/core';
// import { Subscription } from 'rxjs';

// @Injectable()
// export class CustomDateAdapter extends MomentDateAdapter implements OnDestroy {
//   private langChange: Subscription;

//   constructor(
//     private translateService: TranslateService,
//     @Optional() @Inject(MAT_DATE_LOCALE) dateLocale: string,
//     @Optional() @Inject(MAT_MOMENT_DATE_ADAPTER_OPTIONS) _options?: MatMomentDateAdapterOptions,
//   ) {
//     super(dateLocale, _options);
//     this.langChange = this.translateService.onLangChange.subscribe((val) => {
//       const mapper: { [key in string]: string } = {
//         hu: 'hu-HU',
//         en: 'en-GB',
//       };
//       this.setLocale(mapper[val.lang]);
//     });
//   }

//   public format(date: moment.Moment, displayFormat: string): string {
//     const mappedLocale = (this.locale as string).replace('-', '_');
//     return super.format(date, (displayFormat as unknown as Record<string, string>)[mappedLocale]);
//   }

//   ngOnDestroy() {
//     this.langChange.unsubscribe();
//   }
// }
