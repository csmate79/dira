import { OverlayModule } from '@angular/cdk/overlay';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { IMaskModule } from 'angular-imask';
import { StarRatingModule } from 'angular-star-rating';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgxPermissionsModule } from 'ngx-permissions';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { InstructorCardComponent } from '../instructor/components/instructor-card/instructor-card.component';
import { InstructorSlideListComponent } from '../instructor/components/instructor-slide-list/instructor-slide-list.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { ButtonComponent } from './components/button/button.component';
import { CloseableSnackbarComponent } from './components/closeable-snackbar/closeable-snackbar.component';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PartnerCardComponent } from './components/partner-card/partner-card.component';
import { SearchComponent } from './components/search/search.component';
import { SelectComponent } from './components/select/select.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { ErrorsDirective } from './directives/errors.directive';
import { MaskConfigDirective } from './directives/mask-config.directive';
import { ArrayToStringPipe } from './pipes/array-to-string.pipe';
import { DateToTimePipe } from './pipes/date-to-time.pipe';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';
import { EnumToSelectOptionsPipe } from './pipes/enum-to-select-options.pipe';
import { InformationValueFormatPipe } from './pipes/information-value-format.pipe';
import { WrappingPipe } from './pipes/wrapping.pipe';

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
    StarRatingModule,
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
    InstructorSlideListComponent,
    InstructorCardComponent,
    ButtonComponent,
    SelectComponent,
];

/** Saját direktívák gyűjtőlistája. */
const directives = [ErrorsDirective, MaskConfigDirective, DropdownDirective];

/** Saját pipe-ok gyűjtőlistája. */
const pipes = [
    EnumToArrayPipe,
    InformationValueFormatPipe,
    DateToTimePipe,
    ArrayToStringPipe,
    WrappingPipe,
    EnumToSelectOptionsPipe,
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
export class SharedModule {}
