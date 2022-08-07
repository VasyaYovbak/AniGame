import {Component, ElementRef, OnInit} from '@angular/core';
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fightIcon: string = '';
  achievementIcon: string = '';
  loreIcon: string = '';

  constructor(private el: ElementRef, private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.fightIcon = this.themeService.active.properties['--home-fight-icon-name'];
    this.achievementIcon = this.themeService.active.properties['--home-achievement-icon-name'];
    this.loreIcon = this.themeService.active.properties['--home-lore-icon-name'];
  }

  ngAfterViewInit() {
    this.el.nativeElement.ownerDocument
      .body.style.background = 'var(--primary-image)';
    this.el.nativeElement.ownerDocument.body.style.backgroundSize = 'cover';
  }
}
