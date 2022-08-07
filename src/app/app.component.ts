import {Component} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";
import {ThemeService} from "./services/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AniGame';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private themeService: ThemeService) {
    let narutoThemeIcons = [{name: 'naruto-fight-scene', url: 'assets/themes/naruto/icons/fight-scene.svg'},
      {name: 'naruto-lore', url: 'assets/themes/naruto/icons/lore.svg'},
      {name: 'naruto-achievement', url: 'assets/themes/naruto/icons/achievement.svg'}]

    let bleachThemeIcons = [{name: 'bleach-fight-scene', url: 'assets/themes/bleach/icons/fight-scene.svg'},
      {name: 'bleach-achievement', url: 'assets/themes/bleach/icons/achievement.svg'},
      {name: 'bleach-lore', url: 'assets/themes/bleach/icons/lore.svg'}]

    let onePieceThemeIcons = [{name: 'one-piece-fight-scene', url: 'assets/themes/one-piece/icons/fight-scene.svg'},
      {name: 'one-piece-achievement', url: 'assets/themes/one-piece/icons/achievement.svg'},
      {name: 'one-piece-lore', url: 'assets/themes/one-piece/icons/lore.svg'}
    ]

    let vagabondThemeIcons = [{name: 'vagabond-fight-scene', url: 'assets/themes/vagabond/icons/fight-scene.svg'},
      {name: 'vagabond-achievement', url: 'assets/themes/vagabond/icons/achievement.svg'},
      {name: 'vagabond-lore', url: 'assets/themes/vagabond/icons/lore.svg'}];

    let FateStayNightIcons = [{name: 'fate-stay-night-fight-scene', url: 'assets/themes/fate-stay-night/icons/fight-scene.svg'},
      {name: 'fate-stay-night-achievement', url: 'assets/themes/fate-stay-night/icons/achievement.svg'},
      {name: 'fate-stay-night-lore', url: 'assets/themes/fate-stay-night/icons/lore.svg'}]

    let CommonIcons = [{name: 'ani-game-logo', url: 'assets/ani-game-logo.svg'}]

    let customIcons: Array<{ name: string, url: string }> =
      [...CommonIcons,
        ...narutoThemeIcons,
        ...bleachThemeIcons,
        ...onePieceThemeIcons,
        ...vagabondThemeIcons,
        ...FateStayNightIcons];

    for (let i = 0; i < customIcons.length; i++) {
      let currentIcon = customIcons[i];
      matIconRegistry.addSvgIcon(currentIcon.name, this.domSanitizer.bypassSecurityTrustResourceUrl(currentIcon.url))
    }
  }

  ngOnInit(): void {
    // this.themeService.setNarutoTheme(); // done
    // this.themeService.setOnePieceTheme(); // done
    // this.themeService.setBleachTheme(); // done
    this.themeService.setVagabondTheme(); // done
    // this.themeService.setFateStayNightTheme(); // done
  }
}
