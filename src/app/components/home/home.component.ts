import {Component, ElementRef, OnInit} from '@angular/core';
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private el: ElementRef, public themeService: ThemeService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // this.el.nativeElement.ownerDocument
    //   .body.style.background = '#C4C5C6'; ///'#E5E5E5';
    // this.el.nativeElement.ownerDocument.body.style.backgroundSize = '';


    // this.el.nativeElement.ownerDocument.styles.append('body');
    // this.el.nativeElement.ownerDocument.body.className += ' body-background';
    // this.el.nativeElement.ownerDocument
    //   .body.style.background = 'var(--primary-image)';
    // this.el.nativeElement.ownerDocument.body.style.backgroundSize = 'cover';
  }
}
