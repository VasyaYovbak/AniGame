import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Character} from "../card/card.component";
import {GameService} from "../../../../../services/game.service";
import {ActivatedRoute} from "@angular/router";
import {WebSocketService} from "../../../../../services/web-socket.service";
import {CookieService} from "../../../../../services/cookie.service";

export interface Card {
  card_id: number,
  character: Character,
  is_active: boolean
}

@Component({
  selector: 'game-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() cards: Array<Card> = [];

  isYourTurn: boolean = true;

  constructor(private gameService: GameService,
              private route: ActivatedRoute,
              private webSocketService: WebSocketService,
              private cookie: CookieService) {
  }

  ngOnInit(): void {
    this.webSocketService.listen('step_info')
      .subscribe((data) => {
        console.log(data);
      })
    this.webSocketService.listen('change_turn')
      .subscribe((data) => {
        this.isYourTurn = !this.isYourTurn;
      })

  }

  chooseCard(card: Card) {
    if(this.isYourTurn){
      card.is_active = !card.is_active;
    }
  }

  makeStep() {
    if (!this.isYourTurn) {
      return
    }
    this.route.params.subscribe((params) => {
      this.webSocketService.emit('step', {
        "access_token": this.cookie.getAuthToken(),
        "data": {
          "game_id": params['id'],
          "cards": this.cards
        }
      })
    })

  }
}
