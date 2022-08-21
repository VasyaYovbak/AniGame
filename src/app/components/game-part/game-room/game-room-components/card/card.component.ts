import {Component, Input, OnInit} from '@angular/core';

export interface Character {
  name: string,
  image: string,
}

@Component({
  selector: 'game-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() underImageMessage: string = '';
  @Input() type: string;
  @Input('character') character: Character;
  additionalClass: string = '';


  constructor() {
  }

  ngOnInit(): void {
    if (this.type === 'opponent-card') {
      this.additionalClass = this.type;
    }
  }

}
