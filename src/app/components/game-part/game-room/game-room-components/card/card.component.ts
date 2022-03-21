import {Component, Input, OnInit} from '@angular/core';

export interface Character{
  name:string,
  image:string,
}
@Component({
  selector: 'game-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('character') character:Character;


  constructor() { }

  ngOnInit(): void {
  }

}
