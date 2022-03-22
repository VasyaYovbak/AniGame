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
import {GameModule} from "./components/game-part/game.module";
import {AuthGuard} from "./services/guards/auth.guard";

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
  providers: [CookieService, AuthorizationService,AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
