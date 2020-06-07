import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-holiday-home-item',
  templateUrl: './holiday-home-item.component.html',
  styleUrls: ['./holiday-home-item.component.css']
})
export class HolidayHomeItemComponent implements OnInit {
  @Input() homeItem: any;

  constructor() { }

  ngOnInit(): void {
  }

}
