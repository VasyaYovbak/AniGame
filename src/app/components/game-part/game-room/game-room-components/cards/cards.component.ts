import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameService} from "../../../../../services/game.service";
import {ActivatedRoute} from "@angular/router";
import {WebSocketService} from "../../../../../services/web-socket.service";
import {CookieService} from "../../../../../services/cookie.service";
import {Card} from "../card/card.component";


@Component({
  selector: 'game-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() cards: Array<Card> = [];

  @Input()
  isYourTurn!: boolean;

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


  }

  chooseCard(card: Card) {
    if (this.isYourTurn) {
      card.is_active = !card.is_active;
    }
  }
}
