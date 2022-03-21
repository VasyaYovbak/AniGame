import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {WebSocketService} from "../../../services/web-socket.service";
import {interval} from "rxjs";
import {CookieService} from "../../../services/cookie.service";
import {ActivatedRoute} from "@angular/router";
import {GameService} from "../../../services/game.service";
import {Card} from "./game-room-components/cards/cards.component";
import {Character} from "./game-room-components/card/card.component";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.scss']
})
export class GameRoomComponent implements OnInit {

  isGameEnd = false;
  winResult: {
    winner: string,
    loser: string
  } = {winner: '', loser: ''};
  cards: Array<Card> = [];
  selected_character: Character = {
    name: "",
    image: "",
  };

  constructor(private webSocketService: WebSocketService,
              private cookie: CookieService,
              private route: ActivatedRoute,
              private gameService: GameService,
              private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.webSocketService.listen<{
        winner: string,
        loser: string
      }>('game_end')
        .subscribe((data) => {
          this.isGameEnd = true;
          this.winResult = data;
        });
      this.webSocketService.emit('connect-to-game', {
        "access_token": this.cookie.getAuthToken(),
        "data": {
          game_id: params['id']
        }
      });
      this.gameService.getCards<{
        cards: Array<Card>,
        selected_character: Card
      }>(params['id']).subscribe((data) => {
        this.cards = data?.cards;
        this.selected_character = data?.selected_character.character;
        console.log(this.selected_character)
      });
      this.webSocketService.emit('connectToChat', {
        "access_token": this.cookie.getAuthToken(),
        "data": {
          game_id: params['id']
        }
      });
    });
  }

}
