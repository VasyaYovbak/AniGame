import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoomsGridComponent} from "./rooms-grid.component";
import {AgGridModule} from "ag-grid-angular";


@NgModule({
  declarations: [RoomsGridComponent],
  imports: [
    CommonModule,
    AgGridModule
  ],
  exports: [RoomsGridComponent]
})
export class RoomsGridModule {
}
