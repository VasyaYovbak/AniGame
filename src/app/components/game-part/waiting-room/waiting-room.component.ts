import {Component, OnInit} from '@angular/core';
import {GameService} from "../../../services/game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.scss']
})
export class WaitingRoomComponent implements OnInit {

  isSearching = false;

  constructor(private gameService: GameService, private router: Router) {
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
}
