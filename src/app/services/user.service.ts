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


@Injectable({
  providedIn: 'root'
})
export class UserService {

  backendUrl = 'https://ani-game-backend.herokuapp.com'

  constructor(private cookie:CookieService, private http:HttpClient) {

  }
  getSelfUser(){
    return JSON.parse(<string>this.cookie.getCookie('self'));
  }
  getProfile(user_id:number){

  }
  getLeaderList(){
     return this.http.get<Array<User>>(this.backendUrl+'/leaderboard');
  }
}
