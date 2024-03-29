import {Component, OnInit} from '@angular/core';
import {GameService} from "../../../services/game.service";
import {Router} from "@angular/router";
import {RoomsService} from "../rooms.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateRoomDialogComponent} from "./create-room-dialog/create-room-dialog.component";

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.scss']
})
export class WaitingRoomComponent implements OnInit {

  isSearching = false;

  constructor(private gameService: GameService, private router: Router, private _roomsService: RoomsService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.gameService.checkSearchStatus().subscribe((data) => {
      console.log(data);
      this.isSearching = <boolean>data;
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
}
