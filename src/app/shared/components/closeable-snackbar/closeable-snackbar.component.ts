/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Component, Inject } from '@angular/core';
import {
  MAT_LEGACY_SNACK_BAR_DATA as MAT_SNACK_BAR_DATA,
  MatLegacySnackBarRef as MatSnackBarRef,
} from '@angular/material/legacy-snack-bar';

@Component({
  selector: 'app-closeable-snackbar',
  templateUrl: './closeable-snackbar.component.html',
  styleUrls: ['./closeable-snackbar.component.scss'],
})
export class CloseableSnackbarComponent {
  public messageKey: string;

  public messageInterpolateParams: object;

  public detailsKey?: string;

  public detailsInterpolateParams?: object;

  constructor(
    private matSnackbarRef: MatSnackBarRef<CloseableSnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA)
    data: {
      messageKey: string;
      messageInterpolateParams: object;
      detailsKey: string;
      detailsInterpolateParams: object;
    },
  ) {
    this.messageKey = data.messageKey;
    this.messageInterpolateParams = data.messageInterpolateParams;
    this.detailsKey = data.detailsKey;
    this.detailsInterpolateParams = data.detailsInterpolateParams;
  }

  public close(): void {
    this.matSnackbarRef.dismiss();
  }
}
