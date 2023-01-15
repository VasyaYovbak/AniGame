import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoomsGridComponent} from "./rooms-grid.component";
import {AgGridModule} from "ag-grid-angular";
import {AnimeGridCellComponent} from './anime-grid-cell/anime-grid-cell.component';
import {AnimeGridFilterComponent} from './anime-grid-filter/anime-grid-filter.component';
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [RoomsGridComponent, AnimeGridCellComponent, AnimeGridFilterComponent],
  imports: [
    CommonModule,
    AgGridModule,
    MatSelectModule,
    MatListModule
  ],
  exports: [RoomsGridComponent]
})
export class RoomsGridModule {
}
