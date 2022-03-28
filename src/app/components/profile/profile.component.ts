import {Component, OnInit} from '@angular/core';
import {Profile, UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: Profile | undefined = undefined;

  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userService.getProfile(params['id']).subscribe((data) => {
        this.profile = data;
        console.log(data);
      })
    })

  }

}
