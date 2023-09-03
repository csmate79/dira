import { Injectable } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  constructor(private matDialog: MatDialog) {}

  canDeactivate(
    component: CanComponentDeactivate,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate ? component.canDeactivate(this.matDialog) : true;
  }
}

export interface CanComponentDeactivate {
  canDeactivate?: (matDialog: MatDialog) => Observable<boolean> | Promise<boolean> | boolean;
}
