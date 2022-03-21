import {Component, OnInit} from '@angular/core';
import {CookieService} from "../../services/cookie.service";
import {AuthorizationService} from "../../services/authorization.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private cookie: CookieService, private auth: AuthorizationService, private router: Router) {
  }


  ngOnInit(): void {

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
