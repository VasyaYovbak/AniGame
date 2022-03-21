import {Injectable} from '@angular/core';
import {CookieService} from "./cookie.service";

interface User {
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



  constructor(private cookie:CookieService) {

  }
  getSelfUser(){
    return JSON.parse(<string>this.cookie.getCookie('self'));
  }
  getUser(user_id:number){

  }
}
