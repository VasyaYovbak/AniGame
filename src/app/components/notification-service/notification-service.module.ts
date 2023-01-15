import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorNotificationSnackbarModule} from "./error-notification-snackbar";
import {SuccessNotificationSnackbarModule} from "./success-notification-snackbar";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ErrorNotificationSnackbarModule,
    SuccessNotificationSnackbarModule,
    MatSnackBarModule
  ]
})
export class NotificationServiceModule {
}
