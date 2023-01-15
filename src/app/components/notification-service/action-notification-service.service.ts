import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {SuccessNotificationSnackbarComponent} from "./success-notification-snackbar";
import {ErrorNotificationSnackbarComponent} from "./error-notification-snackbar";

@Injectable({
  providedIn: 'root'
})
export class ActionNotificationServiceService {

  constructor(private _snackBar: MatSnackBar) {
  }

  createErrorMessage(message: string, action: string) {
    this._snackBar.openFromComponent(ErrorNotificationSnackbarComponent, {
      data: {
        message,
        action
      },
      panelClass: ['error-notification-message']
    })
  }

  createSuccessMessage(message: string, action: string,) {
    this._snackBar.openFromComponent(SuccessNotificationSnackbarComponent, {
      data: {
        message,
        action
      },
      panelClass: ['success-notification-message']
    })
  }
}
