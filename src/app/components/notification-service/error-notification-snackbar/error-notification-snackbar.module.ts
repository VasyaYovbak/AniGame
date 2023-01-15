import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorNotificationSnackbarComponent} from "./error-notification-snackbar.component";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [ErrorNotificationSnackbarComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ], exports: [ErrorNotificationSnackbarComponent]
})
export class ErrorNotificationSnackbarModule {
}
