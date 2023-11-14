import { Injectable } from '@angular/core';
import {
    MatSnackBar,
    MatSnackBarRef,
} from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

import { CloseableSnackbarComponent } from '../components/closeable-snackbar/closeable-snackbar.component';
import { NotificationType } from '../enums/notification-type.enum';
import { INotificationOptions } from '../interfaces/notification-options.interface';

/** Felugró értesítéseket kezelő controller. */
@Injectable({
    providedIn: 'root',
})
export class NotificationController {
    private readonly defaultPanelClass = 'snackbar-notification';

    private readonly defaultDuration = 5000;

    constructor(private matSnackBar: MatSnackBar, private translateService: TranslateService) { }

    /**
     * Feldob egy értesítést nyelvesített üzenettel.
     *
     * @param type Az értesítés típusa.
     * @param messageKey Az üzenet kulcsa.
     * @param messageInterpolateParams Az üzenet fordítási paraméterei.
     * @param detailsKey Az üzenet címének kulcsa.
     * @param notificationOptions Az értesítés paraméterei. {@link INotificationOptions}
     */
    public showTranslatedMessage(
        type: NotificationType,
        messageKey: string,
        messageInterpolateParams?: object,
        detailsKey?: string,
        notificationOptions: INotificationOptions = {},
    ): MatSnackBarRef<CloseableSnackbarComponent> {
        const namespace = notificationOptions.namespace
            ? notificationOptions.namespace
            : 'NOTIFICATION';
        const keyFound =
            this.translateService.instant(`${namespace}.${messageKey}`) !== `${namespace}.${messageKey}`;
        return this.matSnackBar.openFromComponent(CloseableSnackbarComponent, {
            data: {
                messageKey: keyFound ? `${namespace}.${messageKey}` : 'NOTIFICATION.GENERIC_EXCEPTION',
                messageInterpolateParams: messageInterpolateParams ?? null,
                detailsKey: detailsKey ? `${namespace}.${detailsKey}` : null,
                detailsInterpolateParams: notificationOptions.interpolateParams
                    ? notificationOptions.interpolateParams
                    : null,
            },
            panelClass: [this.defaultPanelClass, type],
            duration: notificationOptions.duration ? notificationOptions.duration : this.defaultDuration,
        });
    }
}
