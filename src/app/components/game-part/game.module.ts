import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameRoomComponent} from "./game-room/game-room.component";
import {CardsComponent} from "./game-room/game-room-components/cards/cards.component";
import {CardComponent} from "./game-room/game-room-components/card/card.component";
import {ChatComponent} from "./game-room/game-room-components/chat/chat.component";
import {WaitingRoomComponent} from "./waiting-room/waiting-room.component";
import {BrowserModule} from "@angular/platform-browser";
import {GameService} from "../../services/game.service";
import {WebSocketService} from "../../services/web-socket.service";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    GameRoomComponent,
    CardsComponent,
    CardComponent,
    ChatComponent,
    WaitingRoomComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatIconModule,
    MatInputModule
  ],
  providers:[GameService,WebSocketService]
})
export class GameModule {
}
