import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoomComponent} from "./room.component";
import {MatButtonModule} from "@angular/material/button";
import {UpdateRoomDialogComponent} from "./update-room-dialog/update-room-dialog.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [RoomComponent, UpdateRoomDialogComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatInputModule,
        MatProgressSpinnerModule
    ],
  exports: [RoomComponent,
  ]
})
export class RoomModule {
}
