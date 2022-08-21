import {Injectable} from '@angular/core';
import * as io from 'socket.io-client'
import {Observable} from "rxjs";
import {CookieService} from "./cookie.service";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  socket: any;
  // url: string = 'wss://ani-game-backend.herokuapp.com';
  url: string = 'ws://127.0.0.1:2012';

  constructor(private cookie: CookieService) {
    this.socket = io.connect(this.url)
  }

  listen<T>(eventName: string) {
    return new Observable<T>(subscriber => {
      this.socket.on(eventName, (data: T) => {
        subscriber.next(data);
      })
    })
  }

  emit(eventName: string, data: any) {
    data = Object.assign({data}, {"access_token": this.cookie.getAuthToken()})
    this.socket.emit(eventName, data);
  }

}
