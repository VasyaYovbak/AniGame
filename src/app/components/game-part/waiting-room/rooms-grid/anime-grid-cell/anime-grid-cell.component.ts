import {Component} from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";
import {ICellRendererParams} from "ag-grid-community";
import {Anime} from "../../../game.models";

@Component({
  selector: 'app-anime-grid-cell',
  templateUrl: './anime-grid-cell.component.html',
  styleUrls: ['./anime-grid-cell.component.scss']
})
export class AnimeGridCellComponent implements ICellRendererAngularComp {

  animeList: Anime[];

  currentAnimeList: Anime[];

  constructor() {
  }

  agInit(params: ICellRendererParams & { animeList: Anime[] }): void {
    this.animeList = params.animeList;
    this.currentAnimeList = params.value.map((animeId: number) => {
      return this.getAnime(animeId);
    });
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  getAnime(animeId: number) {
    return this.animeList.find((element) => element.anime_id == animeId)
  }

}
