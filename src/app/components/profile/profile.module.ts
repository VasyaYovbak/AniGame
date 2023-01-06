import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GamesAnalyticsComponent} from "./games-analytics/games-analytics.component";
import {ProfileComponent} from "./profile.component";
import {NgChartsModule} from "ng2-charts";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    GamesAnalyticsComponent,
  ],
  exports: [
    GamesAnalyticsComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    BrowserModule
  ]
})
export class ProfileModule {
}
