import { Component, OnInit, Input } from '@angular/core';
import { faPlane, faUmbrellaBeach, faShoppingBag, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-holiday-home-item-info-bottom',
  templateUrl: './holiday-home-item-info-bottom.component.html',
  styleUrls: ['./holiday-home-item-info-bottom.component.css']
})
export class HolidayHomeItemInfoBottomComponent implements OnInit {
  @Input() ownerId: number;
  @Input() homeId: number;

  @Input() distanceToAirport: number;
  @Input() distanceToBeach: number;
  @Input() distanceToShopping: number;

  @Input() faDistanceToAirport: any = faPlane;
  @Input() faDistanceToBeach: any = faUmbrellaBeach;
  @Input() faDistanceToShopping: any = faShoppingBag;
  @Input() faEdit: any = faEdit;
  @Input() faDelete: any = faTrashAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
