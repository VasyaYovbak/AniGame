import {Injectable} from '@angular/core';
import {CookieService} from "./cookie.service";
import {HttpClient} from "@angular/common/http";

export interface User {
  id: number,
  username: string,
  email: string,
  rating: number,
  image: string
}

export interface Profile {
  user_info: {
    email: string,
    username: string,
    image: string
  },
  games: Array<{
    date: string,
    game_id: number,
    winner: string,
    loser: string
  }>
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // backendUrl = 'https://ani-game-backend.herokuapp.com'
  backendUrl = "http://127.0.0.1:2012"

  constructor(private cookie: CookieService, private http: HttpClient) {

  }

  getSelfUser() {
    return JSON.parse(<string>this.cookie.getCookie('self'));
  }

  getProfile(user_id: number) {
    return this.http.get<Profile>(this.backendUrl + `/profile/${user_id}`);
  }

  getLeaderList() {
    return this.http.get<Array<User>>(this.backendUrl + '/leaderboard');
  }
}
