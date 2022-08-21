import {Component, OnInit} from '@angular/core';
import {WebSocketService} from "../../../services/web-socket.service";

import {CookieService} from "../../../services/cookie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../../../services/game.service";
import {Card} from "./game-room-components/cards/cards.component";
import {Character} from "./game-room-components/card/card.component";


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
              private router: Router
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
      // this.gameService.getCards<{
      //   cards: Array<Card>,
      //   selected_character: Card
      // }>(params['id']).subscribe((data) => {
      //     this.cards = data?.cards;
      //     this.selected_character = data?.selected_character.character;
      //     console.log(this.selected_character)
      //   },
      //   (error) => {
      //     this.router.navigate(['/home']);
      //   });
      let cardsMockUp = []
      for (let i = 0; i < 28; i++){
        // image:"-150 -150"
        cardsMockUp.push({card_id: 1, character: {name:"Naruto", image:"150px -150px"} , is_active: true})
      }
      this.cards = cardsMockUp;
      this.selected_character.name = 'Sasuke'; // have to make sure character name is not greater than 18

      this.webSocketService.emit('connectToChat', {
        "access_token": this.cookie.getAuthToken(),
        "data": {
          game_id: params['id']
        }
      });
    });
  }

}
