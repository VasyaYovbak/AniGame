import {Component, OnDestroy, OnInit} from '@angular/core';
import {RoomsService} from "../rooms.service";
import {ActivatedRoute, Router} from "@angular/router";
import {GameRoom, RoomEventData, RoomEvents} from "../game.models";
import {MatDialog} from "@angular/material/dialog";
import {UpdateRoomDialogComponent} from "./update-room-dialog/update-room-dialog.component";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  roomId!: string;

  roomData: GameRoom;


  constructor(private _roomsService: RoomsService, private route: ActivatedRoute, private router: Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.roomId = params['id']

      this._roomsService.connectToRoom<RoomEventData<any>>(this.roomId).subscribe((data) => {
        switch (data.event) {
          case RoomEvents.GameStart : {
            this.router.navigate([`game/${data.data.game_id}`])
            break;
          }
          case RoomEvents.Join : {
            console.log(data.data)
            this.roomData = data.data.room;
            break;
          }
          case RoomEvents.Error: {
            console.log(data.data);
            break;
          }
          case RoomEvents.Update: {
            this.roomData = data.data.room;
            break;
          }
        }
      });
      this._roomsService.joinToRoom({room_id: this.roomId})
    })
  }

  updateRoom() {
    let dialogRef = this.dialog.open(UpdateRoomDialogComponent, {
      height: '400px',
      width: '600px',
      data: {
        animeList: this.roomData.anime_list,
        name: this.roomData.name,
        roomId: this.roomData.room_id
      }
    });
  }

}
