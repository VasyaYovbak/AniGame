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

  constructor(private gameService: GameService,private router:Router) {
  }

  ngOnInit(): void {

  }

  startSearch() {
    this.isSearching = true;
    this.gameService.searchOpponent().subscribe((data)=>{
        this.router.navigate([`/game/${data}`])
    });
  }
}
