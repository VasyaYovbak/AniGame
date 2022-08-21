import {Injectable} from '@angular/core';
import {WebSocketService} from "../../services/web-socket.service";
import {RowDataTransaction} from "ag-grid-community";

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private _webSocketService: WebSocketService) {
  }

  getRoomsStream() {
    return this._webSocketService.listen<RowDataTransaction>('rooms');
  }

  getRooms() {
    return this._webSocketService.emit('rooms-get', '');
  }

  createRoom(name: string, animeList: number[]) {
    return this._webSocketService.emit('room-create', {name, animeList});
  }

  updateRoom(room_id: string, name?: string, animeList?: number[]) {
    this._webSocketService.emit('room-update', {name, animeList, room_id})
  }

  connectToRoom<T>(roomId: string) {
    this._webSocketService.emit('room-connect', roomId);

    return this.getRoomInfo<T>();
  }

  getRoomInfo<T>() {
    return this._webSocketService.listen<T>('room-info');
  }

  joinToRoom(data: { room_id: string }) {
    return this._webSocketService.emit('room-join', data);
  }

  leaveRoom(data: { room_id: string }) {
    return this._webSocketService.emit('room-leave', data);
  }

  startRoom(data: { room_id: string }) {
    return this._webSocketService.emit('room-start', data);
  }

}
