import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/Authorization-part/login/login.component";
import {RegistrationComponent} from "./components/Authorization-part/registration/registration.component";
import {GameRoomComponent} from "./components/game-part/game-room/game-room.component";
import {WaitingRoomComponent} from "./components/game-part/waiting-room/waiting-room.component";
import {AuthGuard} from "./services/guards/auth.guard";
import {LeaderboardComponent} from "./components/leaderboard/leaderboard.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {RoomComponent} from "./components/game-part/room/room.component";
import {ComingSoonComponent} from "./components/coming-soon/coming-soon.component";

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "registration", component: RegistrationComponent},
  {path: "game/search", component: WaitingRoomComponent, canActivate: [AuthGuard],},
  {path: 'game/:id', component: GameRoomComponent, canActivate: [AuthGuard]},
  {path: 'room/:id', component: RoomComponent, canActivate: [AuthGuard]},
  // {path: 'leaderboard', component: LeaderboardComponent}, // temporary commented
  {path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'coming-soon', component: ComingSoonComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
