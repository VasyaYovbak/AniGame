import {ColDef} from "ag-grid-community";
import {Anime} from "../../game.models";
import {AnimeGridCellComponent} from "./anime-grid-cell/anime-grid-cell.component";
import {AnimeGridFilterComponent} from "./anime-grid-filter/anime-grid-filter.component";

export function getColumnDefs(animeList: Anime[]): ColDef[] {
  return [
    {field: 'name', flex: 1, headerName: 'Room name'},
    {field: 'creator_user', flex: 1, headerName: 'Creator'},
    {
      field: 'anime_list',
      flex: 5,
      headerName: "Anime list",
      cellRenderer: AnimeGridCellComponent,
      cellRendererParams: {
        animeList: animeList
      },
      filter: AnimeGridFilterComponent,
      filterParams: {
        animeList: animeList
      }
    },
  ]
}
