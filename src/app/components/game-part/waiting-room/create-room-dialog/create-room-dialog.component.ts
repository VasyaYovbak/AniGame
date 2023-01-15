import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Anime, GameRoom, RoomEventData} from "../../game.models";
import {RoomsService} from "../../rooms.service";
import {AnimeService} from "../../anime.service";
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-room-dialog',
  templateUrl: './create-room-dialog.component.html',
  styleUrls: ['./create-room-dialog.component.scss']
})
export class CreateRoomDialogComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    animeList: new FormControl('', [Validators.required])
  })

  animeList: Anime[] = []
  isSending = false;

  constructor(
    private _roomsService: RoomsService,
    private _animeService: AnimeService,
    private _router: Router,
    public dialogRef: MatDialogRef<CreateRoomDialogComponent>,
  ) {

  }

  ngOnInit(): void {
    this._animeService.getAnimeList().subscribe({
      next: (data) => {
        this.animeList = data;
      }
    })
  }

  createRoom() {
    if (this.form.valid) {
      this._roomsService.getRoomInfo<RoomEventData<{ room: GameRoom }>>().subscribe((data) => {
        this._router.navigate([`room/${data.data.room.room_id}`]);
        this.dialogRef.close();
      })

      this.isSending = true;
      this._roomsService.createRoom(this.form.value.name, this.form.value.animeList);
    }
  }

}
