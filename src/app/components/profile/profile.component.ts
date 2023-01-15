import {Component, Input, OnInit} from '@angular/core';
import {Profile, UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() defaultProfileImage: boolean = true;
  profile: Profile | undefined = undefined;


  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    // this.userService.getProfile(params['id']).subscribe((data) => {
    //   this.profile = data;
    //   this.profile['games'] = [{
    //     date: '1',
    //     game_id: 1,
    //     winner: 'Roma ne mavpa',
    //     loser: 'Sviatoslav mavpa'
    //   }
    //   ]
    //   console.log(data);
    // })
    // })
    this.profile = {
      user_info: {
        username: "Vasya",
        email: "Vasya@gmail.com",
        image: "",
      },
      games: [{
        date: '1',
        game_id: 1,
        winner: 'Roma ne mavpa',
        loser: 'Sviatoslav mavpa'
      }]
    }
    console.log(this.profile.user_info.image)
  }

}
