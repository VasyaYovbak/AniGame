import {Injectable} from '@angular/core';
import * as io from 'socket.io-client'
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket: any;
  url: string = 'wss://ani-game.herokuapp.com';

  constructor() {
    this.socket = io.connect(this.url)
  }

  listen<T>(eventName: string) {
    return new Observable<T>(subscriber => {
      this.socket.on(eventName, (data:T) => {
        subscriber.next(data);
      })
    })
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }

}
