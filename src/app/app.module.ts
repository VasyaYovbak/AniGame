import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {LoginComponent} from './components/Authorization-part/login/login.component';
import {RegistrationComponent} from './components/Authorization-part/registration/registration.component';
import {HomeComponent} from './components/home/home.component';
import {CookieService} from "./services/cookie.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthorizationService} from "./services/authorization.service";
import {JwtInterceptor} from "./services/jwt.interceptor";
import {GameRoomComponent} from './components/game-part/game-room/game-room.component';
import {CardsComponent} from './components/game-part/game-room/game-room-components/cards/cards.component';
import {CardComponent} from './components/game-part/game-room/game-room-components/card/card.component';
import {ChatComponent} from './components/game-part/game-room/game-room-components/chat/chat.component';
import {WaitingRoomComponent} from './components/game-part/waiting-room/waiting-room.component';
import {GameService} from "./services/game.service";
import {GameModule} from "./components/game-part/game.module";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    GameModule
  ],
  providers: [CookieService, AuthorizationService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
