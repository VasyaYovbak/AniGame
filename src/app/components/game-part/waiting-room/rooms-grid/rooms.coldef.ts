import {ColDef} from "ag-grid-community";

export function getColumnDefs(): ColDef[] {
  return [
    {field: 'name', flex: 1},
    {field: 'creator_user', flex: 1},
    {field: 'second_user', flex: 1},
    {field: 'anime_list', flex: 3},
  ]
}
