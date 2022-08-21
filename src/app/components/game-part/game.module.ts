import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameRoomComponent} from "./game-room/game-room.component";
import {CardsComponent} from "./game-room/game-room-components/cards/cards.component";
import {CardComponent} from "./game-room/game-room-components/card/card.component";
import {ChatComponent} from "./game-room/game-room-components/chat/chat.component";
import {BrowserModule} from "@angular/platform-browser";
import {GameService} from "../../services/game.service";
import {WebSocketService} from "../../services/web-socket.service";
import {WaitingRoomModule} from "./waiting-room/waiting-room.module";
import {RoomModule} from "./room/room.module";


@NgModule({
  declarations: [
    GameRoomComponent,
    CardsComponent,
    CardComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RoomModule,
    WaitingRoomModule
  ],
  providers: [GameService, WebSocketService]
})
export class GameModule {
}
