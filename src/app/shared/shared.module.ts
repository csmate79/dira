import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
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
import { SearchComponent } from './components/search/search.component';
import { InputComponent } from './components/input/input.component';
import { MaskConfigDirective } from './directives/mask-config.directive';
import { PartnerCardComponent } from './components/partner-card/partner-card.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { InstructorListComponent } from '../instructor/components/instructor-list/instructor-list.component';
import { InstructorCardComponent } from '../instructor/components/instructor-card/instructor-card/instructor-card.component';
import { ButtonComponent } from './components/button/button.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SelectComponent } from './components/select/select.component';
import { WrappingPipe } from './pipes/wrapping.pipe';
import { EnumToSelectOptionsPipe } from './pipes/enum-to-select-options.pipe';
import { StarRatingModule } from 'angular-star-rating';

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
    SlickCarouselModule,
];

/** Privát komponensek gyűjtőlistája (nem kerülnek exportolásra) */
// const privateComponents = [];

/** Saját komponensek gyűjtőlistája. */
const publicComponents = [
    LoadingComponent,
    CloseableSnackbarComponent,
    HeaderComponent,
    SearchComponent,
    InputComponent,
    PartnerCardComponent,
    AutocompleteComponent,
    InstructorListComponent,
    InstructorCardComponent,
    ButtonComponent,
    SelectComponent
];

/** Saját direktívák gyűjtőlistája. */
const directives = [
    ErrorsDirective,
    MaskConfigDirective,
];

/** Saját pipe-ok gyűjtőlistája. */
const pipes = [
    EnumToArrayPipe,
    InformationValueFormatPipe,
    DateToTimePipe,
    ArrayToStringPipe,
    WrappingPipe,
    EnumToSelectOptionsPipe
];

// const externalDirectives = [];

@NgModule({
    declarations: [...publicComponents, ...pipes, ...directives],
    imports: [...commonModules, ...materialModules, StarRatingModule.forRoot()],
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
