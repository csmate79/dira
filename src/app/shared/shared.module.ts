import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatRippleModule } from '@angular/material/core';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { NgxPermissionsModule } from 'ngx-permissions';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { IMaskModule } from 'angular-imask';
import { CloseableSnackbarComponent } from './components/closeable-snackbar/closeable-snackbar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';
import { ErrorsDirective } from './directives/errors.directive';
import { DateToTimePipe } from './pipes/date-to-time.pipe';
import { ArrayToStringPipe } from './pipes/array-to-string.pipe';
import { InformationValueFormatPipe } from './pipes/information-value-format.pipe';
import { HeaderComponent } from './components/header/header.component';

/** Material modulok gyűjtőlistája. */
const materialModules = [
    MatFormFieldModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    ScrollingModule,
    NgxMatSelectSearchModule,
    IMaskModule,
    NgxMaterialTimepickerModule,
];

/** Általános, közös modulok gyűjtőlistája. */
const commonModules = [
    FormsModule,
    NgxPermissionsModule,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
];

/** Privát komponensek gyűjtőlistája (nem kerülnek exportolásra) */
// const privateComponents = [];

/** Saját komponensek gyűjtőlistája. */
const publicComponents = [
    LoadingComponent,
    CloseableSnackbarComponent,
    HeaderComponent
];

/** Saját direktívák gyűjtőlistája. */
const directives = [
    ErrorsDirective,
];

/** Saját pipe-ok gyűjtőlistája. */
const pipes = [
    EnumToArrayPipe,
    InformationValueFormatPipe,
    DateToTimePipe,
    ArrayToStringPipe,
];

// const externalDirectives = [];

@NgModule({
    declarations: [...publicComponents, ...pipes, ...directives, HeaderComponent],
    imports: [...commonModules, ...materialModules],
    exports: [
        ...commonModules,
        ...materialModules,
        ...publicComponents,
        ...pipes,
        ...directives,
    ],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class, @typescript-eslint/no-unused-vars
export class SharedModule { }
