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
    let customIcons: Array<{ name: string, url: string }> = [{
      name: 'ani-game-logo',
      url: '../assets/ani-game-logo.svg'
    },
      {name: 'fight-scene', url: '../assets/fight-scene.svg'}, {name: 'learn', url: '../assets/learn.svg'},
      {name: 'achievement', url: '../assets/achievement.svg'}]

    for (let i = 0; i < customIcons.length; i++) {
      let currentIcon = customIcons[i];
      matIconRegistry.addSvgIcon(currentIcon.name, this.domSanitizer.bypassSecurityTrustResourceUrl(currentIcon.url))
    }
  }

  ngOnInit(): void {
    this.themeService.setNarutoTheme(); // done
    // this.themeService.setOnePieceTheme(); // Set card photos
    // this.themeService.setBleachTheme(); // Set card photos
    // this.themeService.setVagabondTheme(); // Set card photos
    // this.themeService.setFateStayNightTheme(); // Set card photos
  }
}
