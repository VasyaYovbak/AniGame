import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {
  ColDef,
  GetRowIdFunc,
  GridApi,
  GridReadyEvent,
  RowClickedEvent,
  RowDataTransaction
} from "ag-grid-community";
import {RoomsService} from "../../rooms.service";
import {getColumnDefs} from "./rooms.coldef";
import {Router} from "@angular/router";

@Component({
  selector: 'app-rooms-grid',
  templateUrl: './rooms-grid.component.html',
  styleUrls: ['./rooms-grid.component.scss']
})
export class RoomsGridComponent implements OnInit, OnDestroy {

  private gridApi!: GridApi;


  columnDefs!: ColDef[];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  @Output() shareRowData = new EventEmitter<any>();

  rowData: any[] = [];

  roomSubscriber: any;

  constructor(private _roomsService: RoomsService, private router: Router) {
  }

  ngOnDestroy(): void {
    this.roomSubscriber.unsubscribe();
  }

  ngOnInit(): void {
    this.columnDefs = getColumnDefs();
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api

    this.roomSubscriber = this._roomsService.getRoomsStream().subscribe((transaction: RowDataTransaction) => {
      // console.log(transaction);
      this.gridApi.applyTransaction(transaction)
      this.shareRowData.emit(this.gridApi.getRenderedNodes())
    });
    this._roomsService.getRooms();
  }

  getRowId: GetRowIdFunc = (params) => {
    return params.data.room_id
  }

  onRowClicked(e: RowClickedEvent): void {
    console.log('RowClickedEvent', e);
    this.router.navigate([`room/${e.data.room_id}`])
  }

}
