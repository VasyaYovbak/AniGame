import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventsTabComponent} from "./events-tab.component";
import {SwiperModule} from "swiper/angular";
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
  declarations: [EventsTabComponent],
  exports:[EventsTabComponent],
  imports: [
    CommonModule,
    SwiperModule,
    MatTabsModule
  ]
})
export class EventsTabModule { }
