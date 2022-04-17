import {Component, OnInit} from '@angular/core';
import {User, UserService} from "../../services/user.service";

@Component({
  selector: 'leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  data: Array<User> = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getLeaderList().subscribe((data) => {
      this.data = data;
    })
  }

}
