import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ColDef, GetRowIdFunc, GridApi, GridReadyEvent, RowClickedEvent, RowDataTransaction} from "ag-grid-community";
import {RoomsService} from "../../rooms.service";
import {getColumnDefs} from "./rooms.coldef";
import {Router} from "@angular/router";
import {Anime} from "../../game.models";

@Component({
  selector: 'app-rooms-grid',
  templateUrl: './rooms-grid.component.html',
  styleUrls: ['./rooms-grid.component.scss']
})
export class RoomsGridComponent implements OnInit, OnDestroy {

  @Input()
  animeList: Anime[]

  private gridApi!: GridApi;


  columnDefs!: ColDef[];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  rowData: any[] = [];

  roomSubscriber: any;

  constructor(private _roomsService: RoomsService, private router: Router) {
  }

  ngOnDestroy(): void {
    this.roomSubscriber.unsubscribe();
  }

  ngOnInit(): void {
    this.columnDefs = getColumnDefs(this.animeList);
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api
    this.gridApi.showLoadingOverlay();

    this.roomSubscriber = this._roomsService.getRoomsStream().subscribe((transaction: RowDataTransaction) => {
      this.gridApi.applyTransaction(transaction)
    });
    this._roomsService.getRooms();
  }

  getRowId: GetRowIdFunc = (params) => {
    return params.data.room_id
  }

  onRowClicked(e: RowClickedEvent): void {
    this.router.navigate([`room/${e.data.room_id}`])
  }


}
