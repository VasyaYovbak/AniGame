import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import SwiperCore, {Pagination, Autoplay, SwiperOptions, Navigation} from "swiper";

SwiperCore.use([Pagination, Autoplay, Navigation]);

@Component({
  selector: 'app-events-tab',
  templateUrl: './events-tab.component.html',
  styleUrls: ['./events-tab.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EventsTabComponent implements OnInit {

  config: SwiperOptions = {
    // navigation:{
    //   nextEl:'.next',
    // },
    slidesPerView: 1,
    pagination: true,
    // pagination:{type:"progressbar"},
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    preventClicks: false,
    preventClicksPropagation: false
  };
  sponsors = [{
    img: "assets/sponsors-placeholder.jpg",
    description: "Here can be your product"
    },
    {
      img: "assets/sponsors-placeholder.jpg",
      description: "Here can be your product"
    }];

  constructor() {
  }

  ngOnInit(): void {
  }

}
