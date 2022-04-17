import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CookieService} from "../../services/cookie.service";
import {AuthorizationService} from "../../services/authorization.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, interval} from "rxjs";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  userId: number;

  constructor(private cookie: CookieService, private auth: AuthorizationService, private userService: UserService) {
  }

  ngOnInit(): void {
    const subscription = interval(1000).subscribe(() => {
      if (this.userService.getSelfUser()) {
        this.userId = this.userService.getSelfUser().id;
        subscription.unsubscribe();
      }
    })
  }


  isLoggedIn() {
    return !(this.cookie.getAuthToken() === null);
  }

  logout() {
    this.auth.logout().subscribe(() => {
      this.cookie.clearCookie('access_token');
      this.cookie.clearCookie('self');
    })
  }

}
