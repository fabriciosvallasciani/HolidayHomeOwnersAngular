import { Component, OnInit, Input } from '@angular/core';
import { HolidayHomeModel } from 'src/app/models/holiday-home.model';

@Component({
  selector: 'app-holiday-home-item',
  templateUrl: './holiday-home-item.component.html',
  styleUrls: ['./holiday-home-item.component.css']
})
export class HolidayHomeItemComponent implements OnInit {
  @Input() homeItem: HolidayHomeModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
