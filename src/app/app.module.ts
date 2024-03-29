import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {LoginComponent} from './components/Authorization-part/login/login.component';
import {RegistrationComponent} from './components/Authorization-part/registration/registration.component';
import {HomeComponent} from './components/home/home.component';
import {CookieService} from "./services/cookie.service";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthorizationService} from "./services/authorization.service";
import {JwtInterceptor} from "./services/jwt.interceptor";
import {GameModule} from "./components/game-part/game.module";
import {AuthGuard} from "./services/guards/auth.guard";
import {ProfileComponent} from './components/profile/profile.component';
import {LeaderboardComponent} from './components/leaderboard/leaderboard.component';
import {TableComponent} from './components/shared/table/table.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {CircleSelectorModule} from "./components/circle-selector/circle-selector.module";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import { ClientValidationComponent } from './components/client-validation/client-validation.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    ProfileComponent,
    LeaderboardComponent,
    TableComponent,
    ClientValidationComponent,
    ComingSoonComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        GameModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        CircleSelectorModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule
    ],
  providers: [CookieService, AuthorizationService, AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
