import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('data') data: Array<any> = [];
  @Input('columns') columns: Array<string> = [];

  constructor() {
  }

  ngOnInit(): void {

  }

}
