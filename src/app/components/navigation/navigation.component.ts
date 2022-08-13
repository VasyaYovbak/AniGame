import {Component, OnInit} from '@angular/core';
import {CookieService} from "../../services/cookie.service";
import {AuthorizationService} from "../../services/authorization.service";
import {interval} from "rxjs";
import {UserService} from "../../services/user.service";
import {ThemeService} from "../../services/theme.service";
import {ThemeStates} from "src/assets/type-script/theme-selector/items";
import {OptionState} from "../circle-selector/circle-selector.models";

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
    private cookie: CookieService, private auth: AuthorizationService, private userService: UserService,
    private _themeService: ThemeService) {
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

  onStateChange(state: OptionState) {
    this.selectedState = state;
    const selectedTheme = this._themeService.availableThemes.find((theme) => theme.name === `${state.name}Theme`)
    if (selectedTheme) {
      this._themeService.setActiveTheme(selectedTheme);
    }
  }

}
