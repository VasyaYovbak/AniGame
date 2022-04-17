import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WebSocketService} from "./web-socket.service";
import {ActivatedRoute} from "@angular/router";
import {CookieService} from "./cookie.service";


@Injectable({
  providedIn: 'root'
})
export class GameService {

  backendUrl = 'https://ani-game-backend.herokuapp.com'
  // backendUrl = "http://127.0.0.1:2012"

  constructor(private http: HttpClient,
              private webSocketService: WebSocketService,
              private router: ActivatedRoute,
              private cookie: CookieService
  ) {
  }

  searchOpponent() {
    return this.http.post(this.backendUrl + '/game/start', {});
  }

  checkSearchStatus() {
    return this.http.get(this.backendUrl + '/game/search-status');
  }

  stopSearch() {
    return this.http.delete(this.backendUrl + '/game/search-stop');
  }

  getCards<T>(game_id: number) {
    return this.http.post<T>(this.backendUrl + `/game/${game_id}`, {})
  }

  enterChat<T>() {
    return this.webSocketService.listen<T>('chat')
  }

  sendMessage(text: string, game_id: number) {
    let message = {
      "access_token": this.cookie.getAuthToken(),
      "data": {
        "text": text,
        "game_id": game_id,
      }
    }
    this.webSocketService.emit('chat', message);

  }

}
