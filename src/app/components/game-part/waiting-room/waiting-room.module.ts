import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {WaitingRoomComponent} from "./waiting-room.component";
import {CreateRoomDialogComponent} from "./create-room-dialog/create-room-dialog.component";
import {AgGridModule} from "ag-grid-angular";
import {RoomsGridModule} from "./rooms-grid/rooms-grid.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
  declarations: [WaitingRoomComponent,
    CreateRoomDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    AgGridModule,
    RoomsGridModule,
    MatProgressSpinnerModule,
    MatTabsModule
  ]
})
export class WaitingRoomModule {
}
