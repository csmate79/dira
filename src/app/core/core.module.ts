import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { IMaskModule } from 'angular-imask';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { ErrorHandlingInterceptor } from './interceptors/error-handling.interceptor';
import { LocalizedPaginatorIntl } from './util/localized-paginator-intl';
// import { CustomDateAdapter } from './util/custom-date-adapter';
import { SharedModule } from '../shared/shared.module';
import { AppInit, HttpLoaderFactory } from './util/provider-factory';
import { DateToTimePipe } from '../shared/pipes/date-to-time.pipe';
import { ArrayToStringPipe } from '../shared/pipes/array-to-string.pipe';
import { InformationValueFormatPipe } from '../shared/pipes/information-value-format.pipe';
import { AuthenticationController } from '../authentication/controllers/authentication.controller';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        NgxPermissionsModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        IMaskModule,
        // NgxMaterialTimepickerModule.setLocale('hu-HU'),
    ],
    providers: [
        // {
        //     provide: APP_INITIALIZER,
        //     useFactory: AppInit,
        //     multi: true,
        //     deps: [AuthenticationController, TranslateLoader],
        // },
        // {
        //     provide: HTTP_INTERCEPTORS,
        //     useClass: AuthenticationInterceptor,
        //     multi: true,
        // },
        // {
        //     provide: HTTP_INTERCEPTORS,
        //     useClass: ErrorHandlingInterceptor,
        //     multi: true,
        // },
        { provide: MatPaginatorIntl, useClass: LocalizedPaginatorIntl },
        { provide: MAT_DATE_LOCALE, useValue: 'hu-HU' },
        // { provide: DateAdapter, useClass: CustomDateAdapter },
        { provide: MAT_DATE_FORMATS, useValue: MAT_DATE_FORMATS },
        InformationValueFormatPipe,
        DateToTimePipe,
        ArrayToStringPipe,
    ],
    exports: [SharedModule],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class, @typescript-eslint/no-unused-vars
export class CoreModule { }
