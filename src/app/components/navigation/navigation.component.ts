import {Component, OnInit} from '@angular/core';
import {CookieService} from "../../services/cookie.service";
import {AuthorizationService} from "../../services/authorization.service";
import {interval} from "rxjs";
import {UserService} from "../../services/user.service";
import {ThemeService} from "../../services/theme.service";
import {ThemeStates} from "src/assets/type-script/theme-selector/items";
import {OptionState} from "../circle-selector/circle-selector.models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  userId: number;

  themeStates = ThemeStates;

  selectedState = this.themeStates[0];

  constructor(
    public cookie: CookieService, private auth: AuthorizationService, private userService: UserService,
    private router: Router, private _themeService: ThemeService) {
  }

  ngOnInit(): void {
    const subscription = interval(1000).subscribe(() => {
      if (this.userService.getSelfUser()) {
        this.userId = this.userService.getSelfUser().id;
        subscription.unsubscribe();
      }
    })
  }

  logout() {
    let refreshToken = this.cookie.getRefreshToken();
    if (refreshToken != null) {
      this.auth.logout(refreshToken).subscribe(() => {
        this.cookie.clearAllAuthCookies();
        this.router.navigate(['/login']);
      })
    }
  }

  onStateChange(state: OptionState) {
    this.selectedState = state;
    const selectedTheme = this._themeService.availableThemes.find((theme) => theme.name === `${state.name}Theme`)
    if (selectedTheme) {
      this._themeService.setActiveTheme(selectedTheme);
    }
  }

}
