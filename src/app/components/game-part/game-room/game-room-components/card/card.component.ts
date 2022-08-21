import {Component, Input, OnInit} from '@angular/core';
import {AnimeIdsList} from "./anime.constants";

export interface Character {
  name: string,
  image: string,
  anime_id: number,
}

export interface Card {
  card_id: number,
  character?: Character,
  is_active: boolean
}

@Component({
  selector: 'game-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss', './anime-colages.scss']
})
export class CardComponent implements OnInit {
  @Input() underImageMessage: string = '';
  @Input() type: string;
  @Input('card') card!: Card;
  additionalClass: string = '';

  readonly AnimeIdsList = AnimeIdsList;

  constructor() {
  }

  ngOnInit(): void {
    if (this.type === 'opponent-card') {
      this.additionalClass = this.type;
    }
  }

}
