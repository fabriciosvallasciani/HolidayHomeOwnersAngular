import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-holiday-home-item-info-top',
  templateUrl: './holiday-home-item-info-top.component.html',
  styleUrls: ['./holiday-home-item-info-top.component.css']
})
export class HolidayHomeItemInfoTopComponent implements OnInit {
  @Input() id: number;
  @Input() description: string;

  constructor() {
   }

  ngOnInit(): void {
  }

}
