import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.el.nativeElement.ownerDocument
      .body.style.background = 'var(--primary-image)';
    this.el.nativeElement.ownerDocument.body.style.backgroundSize = 'cover';
  }
}
