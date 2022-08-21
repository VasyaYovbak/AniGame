import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OptionState} from "./circle-selector.models";

@Component({
  selector: 'app-circle-selector',
  templateUrl: './circle-selector.component.html',
  styleUrls: ['./circle-selector.component.scss']
})
export class CircleSelectorComponent implements OnInit {

  @Input()
  set states(data: OptionState[]) {
    this.countOfSection = data.length;
    this._states = data;
  };

  @Input()
  selectedState!: OptionState;


  @Output()
  stateChange = new EventEmitter<OptionState>();

  countOfSection: number;

  private _states: OptionState[];

  get states(): OptionState[] {
    return this._states
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  onStateChange(state: OptionState) {
    this.selectedState = state;
    this.stateChange.emit(state);
  }

  getElementStyles(index: number) {
    return {
      transform: `rotate(-${(360 / this.countOfSection) * index}deg)`,
      'clip-path': this.getCorrectClipPath()
    }
  }

  getBackground(index: number) {
    return `url("${this.states[index].data.img}") ${this.states[index].data.imagePositionX || 0}% ${this.states[index].data.imagePositionY || 0}% / ${this.states[index].data.backgroundSize || 100}%`
  }

  getPictureTransform(index: number) {
    return `rotate(${(360 / this.countOfSection) + (this.states[index].data?.imageRotateDeg || 0)}deg)`;
  }

  getCorrectClipPath() {
    return 'polygon(50% 50%, 100% 50%, 100% 0, 67% 0%)'
  }

}
