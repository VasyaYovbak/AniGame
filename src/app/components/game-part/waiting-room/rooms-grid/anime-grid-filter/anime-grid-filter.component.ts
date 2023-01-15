import {Component} from '@angular/core';
import {IFilterAngularComp} from "ag-grid-angular";
import {IDoesFilterPassParams, IFilterParams} from "ag-grid-community";
import {Anime, GameRoom} from "../../../game.models";


@Component({
  selector: 'app-anime-grid-filter',
  templateUrl: './anime-grid-filter.component.html',
  styleUrls: ['./anime-grid-filter.component.scss']
})
export class AnimeGridFilterComponent implements IFilterAngularComp {

  params: IFilterParams;

  animeList: Anime[];

  selectedAnimeListIds: number[] = [];

  agInit(params: IFilterParams & { animeList: Anime[] }): void {
    this.animeList = params.animeList;
    this.params = params;
  }

  doesFilterPass(params: IDoesFilterPassParams<GameRoom>): boolean {
    const animeIds = new Set(params.data.anime_list);

    return this.selectedAnimeListIds.every((el) => animeIds.has(el));
  }

  getModel(): any {
  }

  isFilterActive(): boolean {
    return true;
  }

  setModel(model: any): void {
    return undefined;
  }

  updateFilter() {
    this.params.filterChangedCallback();
  }


}