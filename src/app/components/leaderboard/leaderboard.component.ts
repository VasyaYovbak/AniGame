import {Component, OnInit} from '@angular/core';
import {User, UserService} from "../../services/user.service";

@Component({
  selector: 'leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  user_list: Array<User> = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getLeaderList().subscribe((data) => {
      this.user_list = data;
    })
  }

}
