import {Component, OnInit} from '@angular/core';
import {WebSocketService} from "../../../services/web-socket.service";

import {CookieService} from "../../../services/cookie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../../../services/game.service";
import {Card} from "./game-room-components/card/card.component";


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
  selected_character: Card = {
    card_id: 0,
    is_active: true,
  };

  isYourTurn: boolean = true;


  constructor(private webSocketService: WebSocketService,
              private route: ActivatedRoute,
              private gameService: GameService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.webSocketService.listen('change_turn')
      .subscribe((data) => {
        this.isYourTurn = !this.isYourTurn;
      })

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
        game_id: params['id']
      });
      this.gameService.getCards<{
        cards: Array<Card>,
        selected_character: Card
      }>(params['id']).subscribe((data) => {
          this.cards = data?.cards;
          this.selected_character.character = data?.selected_character.character;
          console.log(this.selected_character)
        },
        (error) => {
          this.router.navigate(['/home']);
        });
      this.webSocketService.emit('connectToChat', {
        game_id: params['id']
      });
    });
  }

  makeStep() {
    if (!this.isYourTurn) {
      return
    }
    this.route.params.subscribe((params) => {
      this.webSocketService.emit('step', {
          "game_id": params['id'],
          "cards": this.cards
        }
      )
    })

  }

}
