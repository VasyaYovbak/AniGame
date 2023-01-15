import {Component, OnInit} from '@angular/core';
import {GameService} from "../../../services/game.service";
import {Router} from "@angular/router";
import {RoomsService} from "../rooms.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateRoomDialogComponent} from "./create-room-dialog/create-room-dialog.component";
import {AnimeService} from "../anime.service";
import {Anime} from "../game.models";

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.scss']
})
export class WaitingRoomComponent implements OnInit {

  rows:any=[];

  isSearching = false;
  animeList: Anime[] = []

  constructor(private gameService: GameService,
              private router: Router,
              private _roomsService: RoomsService,
              private _animeService: AnimeService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.gameService.checkSearchStatus().subscribe((data) => {
      console.log(data);
      this.isSearching = <boolean>data;
    })
    this._animeService.getAnimeList().subscribe({
      next: (data) => {
        this.animeList = data;
      }
    })
  }

  startSearch() {
    this.isSearching = true;
    this.gameService.searchOpponent().subscribe((data) => {
      if (this.isSearching) {
        this.router.navigate([`/game/${data}`])
      }
    });
  }

  stopSearch() {
    this.gameService.stopSearch().subscribe((data) => {
      console.log(data);
      this.isSearching = false;
    })
  }

  request() {
    console.log('here');
    this._roomsService.getRoomsStream().subscribe(console.log);
    this._roomsService.getRooms();
  }

  createRoom() {
    let dialogRef = this.dialog.open(CreateRoomDialogComponent, {
      height: '400px',
      width: '600px',
    });
  }

  comingSoon() {
    this.router.navigate(["/coming-soon"])
  }

  onDataChange(rowData: any) {
    this.rows=rowData;
    console.log("ya lox",this.rows)
  }

  randomRoom() {
    let id = Math.floor(Math.random() * this.rows.length);

    this.router.navigate([`room/${this.rows[id].id}`])
  }
}
