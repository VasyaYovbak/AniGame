import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-success-notification-snackbar',
  templateUrl: './success-notification-snackbar.component.html',
  styleUrls: ['./success-notification-snackbar.component.scss']
})
export class SuccessNotificationSnackbarComponent {

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


