import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Anime, GameRoom, RoomEventData} from "../../game.models";
import {AnimeService} from "../../anime.service";
import {Router} from "@angular/router";
import {RoomsService} from "../../rooms.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-room-dialog',
  templateUrl: './update-room-dialog.component.html',
  styleUrls: ['./update-room-dialog.component.scss']
})
export class UpdateRoomDialogComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    animeList: new FormControl('', [Validators.required])
  })

  animeList: Anime[] = []

  isSending = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UpdateRoomDialogComponent>,
    private _roomsService: RoomsService,
    private _animeService: AnimeService,
    private _router: Router) {
  }

  ngOnInit(): void {
    this._animeService.getAnimeList().subscribe({
      next: (data) => {
        this.animeList = data;
      }
    })

    this.form.get('animeList')?.setValue(this.data.animeList);
    this.form.get('name')?.setValue(this.data.name);
  }

  updateRoom() {
    console.log(this.form.valid)
    if (this.form.valid) {
      this._roomsService.getRoomInfo<RoomEventData<{ room: GameRoom }>>().subscribe((data) => {
        console.log(data);
        this.dialogRef.close();
      })

      this.isSending = true;
      this._roomsService.updateRoom(this.data.roomId, this.form.value.name, this.form.value.animeList);
    }
  }

}
