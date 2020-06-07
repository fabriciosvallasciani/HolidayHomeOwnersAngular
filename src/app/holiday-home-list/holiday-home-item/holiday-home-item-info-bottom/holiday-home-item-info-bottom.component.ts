import { Component, OnInit, Input } from '@angular/core';
import { faPlane, faUmbrellaBeach, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-holiday-home-item-info-bottom',
  templateUrl: './holiday-home-item-info-bottom.component.html',
  styleUrls: ['./holiday-home-item-info-bottom.component.css']
})
export class HolidayHomeItemInfoBottomComponent implements OnInit {
  @Input() distanceToAirport: number;
  @Input() distanceToBeach: number;
  @Input() distanceToShopping: number;

  @Input() faDistanceToAirport: any = faPlane;
  @Input() faDistanceToBeach: any = faUmbrellaBeach;
  @Input() faDistanceToShopping: any = faShoppingBag;
  
  constructor() { }

  ngOnInit(): void {
  }

}
