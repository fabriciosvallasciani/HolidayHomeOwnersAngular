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
    this.ownerFullName = this.route.snapshot.queryParamMap.get('firstName') + " " + this.route.snapshot.queryParamMap.get('lastName');
    let id = +this.route.snapshot.paramMap.get('id');

    this.holidayHomesListObs = this.holidayHomesService.getAll(id);
  }

}
