import { Component, OnInit } from '@angular/core';
import { HolidayHomesService } from '../services/holiday-homes.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-holiday-home-list',
  templateUrl: './holiday-home-list.component.html',
  styleUrls: ['./holiday-home-list.component.css']
})
export class HolidayHomeListComponent implements OnInit {
  id: string;
  ownerFullName: string;
  holidayHomesListObs: Observable<any>;

  constructor(private route: ActivatedRoute, private holidayHomesService: HolidayHomesService) { 
  }

  ngOnInit(): void {
    let ownerId = +this.route.snapshot.paramMap.get('ownerId');

    this.holidayHomesListObs = this.holidayHomesService.getAll(ownerId);
  }

}
