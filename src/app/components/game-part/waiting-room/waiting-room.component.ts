import {Component, OnInit} from '@angular/core';
import {GameService} from "../../../services/game.service";
import {Router} from "@angular/router";
import {RoomsService} from "../rooms.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateRoomDialogComponent} from "./create-room-dialog/create-room-dialog.component";
import {AnimeService} from "../anime.service";
import {Anime} from "../game.models";
import {GridApi} from "ag-grid-community";
import {ActionNotificationServiceService} from "../../notification-service/action-notification-service.service";

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.scss']
})
export class WaitingRoomComponent implements OnInit {

  private _gridApi: GridApi;
  animeList: Anime[] = []

  constructor(private gameService: GameService,
              private router: Router,
              private _roomsService: RoomsService,
              private _animeService: AnimeService,
              private _actionNotificationServiceService: ActionNotificationServiceService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this._animeService.getAnimeList().subscribe({
      next: (data) => {
        this.animeList = data;
      }
    })
  }


  createRoom() {
    this.dialog.open(CreateRoomDialogComponent, {
      height: '400px',
      width: '600px',
    });
  }

  comingSoon() {
    this.router.navigate(["/coming-soon"])
  }

  onGridReady(gridApi: GridApi) {
    this._gridApi = gridApi;
  }

  randomRoom() {
    const rows = this._gridApi.getRenderedNodes();

    if (!rows.length) {
      this._actionNotificationServiceService.createErrorMessage('Sorry, there are no available rooms now. Create your own room :=)', 'Okay');

      return
    }

    let id = Math.floor(Math.random() * rows.length);
    this.router.navigate([`room/${rows[id].id}`])
  }
}
