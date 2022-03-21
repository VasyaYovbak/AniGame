import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/Authorization-part/login/login.component";
import {RegistrationComponent} from "./components/Authorization-part/registration/registration.component";
import {GameRoomComponent} from "./components/game-part/game-room/game-room.component";
import {WaitingRoomComponent} from "./components/game-part/waiting-room/waiting-room.component";

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"game/search",component:WaitingRoomComponent},
  {path:'game/:id',component:GameRoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
