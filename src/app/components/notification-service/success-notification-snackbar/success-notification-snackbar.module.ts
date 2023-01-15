import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SuccessNotificationSnackbarComponent} from "./success-notification-snackbar.component";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [SuccessNotificationSnackbarComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [SuccessNotificationSnackbarComponent]
})
export class SuccessNotificationSnackbarModule {
}
