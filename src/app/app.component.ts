import {Component} from '@angular/core';
// import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AniGame';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    let customIcons: Array<{name: string, url: string}> = [{name: 'ani-game-logo', url: '../assets/ani-game-logo.svg'}]
    console.log(customIcons.length);
    for (let i = 0; i < customIcons.length; i++){
      let currentIcon = customIcons[i];
      matIconRegistry.addSvgIcon(currentIcon.name, this.domSanitizer.bypassSecurityTrustResourceUrl(currentIcon.url))
    }
  }
}
