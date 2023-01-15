import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-error-notification-snackbar',
  templateUrl: './error-notification-snackbar.component.html',
  styleUrls: ['./error-notification-snackbar.component.scss']
})
export class ErrorNotificationSnackbarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: {
                message: string,
                action: string
              }, private _snackBar: MatSnackBar
  ) {
  }

  onAction() {
    this._snackBar.dismiss();
  }
}
