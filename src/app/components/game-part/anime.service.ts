import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Anime} from "./game.models";

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  // backendUrl = "http://127.0.0.1:2012"
  backendUrl = 'https://ani-game-backend.herokuapp.com'


  constructor(private http: HttpClient) {
  }

  getAnimeList() {
    return this.http.get<Anime[]>(this.backendUrl + '/anime')
  }
}
