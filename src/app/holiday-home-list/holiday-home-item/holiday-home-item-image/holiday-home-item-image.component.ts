import { Component, OnInit, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-holiday-home-item-image',
  templateUrl: './holiday-home-item-image.component.html',
  styleUrls: ['./holiday-home-item-image.component.css'],
  providers: [NgbCarouselConfig] 
})
export class HolidayHomeItemImageComponent implements OnInit {
  @Input() imageList: any;

  constructor(config: NgbCarouselConfig) {
    config.interval = 0;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
   }

  ngOnInit(): void {
  }

}
