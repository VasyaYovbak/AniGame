import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CircleSelectorComponent} from "./circle-selector.component";


@NgModule({
  declarations: [CircleSelectorComponent],
  imports: [
    CommonModule
  ],
  exports: [CircleSelectorComponent,]
})
export class CircleSelectorModule {
}
