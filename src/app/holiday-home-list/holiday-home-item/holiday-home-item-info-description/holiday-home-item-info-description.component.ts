import { Component, OnInit, Input } from '@angular/core';
import { faBed, faCouch, faWifi, faUsers, faSun, faRulerHorizontal, faBath, faTree } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-holiday-home-item-info-description',
  templateUrl: './holiday-home-item-info-description.component.html',
  styleUrls: ['./holiday-home-item-info-description.component.css']
})
export class HolidayHomeItemInfoDescriptionComponent implements OnInit {
  @Input() bedrooms: number; 
  @Input() livingArea: number;
  @Input() hasWiFi: boolean;
  @Input() sleeps: number;
  @Input() terraceArea: number;
  @Input() hasBalcony: boolean;
  @Input() bathrooms: number;
  @Input() gardenArea: number;
  @Input() hasPatio: boolean;

  @Input() faBedrooms: any = faBed;
  @Input() faLivingArea: any = faCouch;
  @Input() faHasWiFi: any = faWifi;
  @Input() faSleeps: any = faUsers;
  @Input() faTerraceArea: any = faSun;
  @Input() faHasBalcony: any = faRulerHorizontal;
  @Input() faBathrooms: any = faBath;
  @Input() faGardenArea: any = faTree;
  @Input() faHasPatio: any = faSun;
  
  constructor() { }

  ngOnInit(): void {
  }

}
