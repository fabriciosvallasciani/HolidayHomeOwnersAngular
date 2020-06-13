import { Component, OnInit } from '@angular/core';
import { HolidayHomesService } from '../services/holiday-homes.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-holiday-home-list',
  templateUrl: './holiday-home-list.component.html',
  styleUrls: ['./holiday-home-list.component.css']
})
export class HolidayHomeListComponent implements OnInit {
  holidayHomesListObs: Observable<any>;

  constructor(public holidayHomesService: HolidayHomesService) { 
  }

  ngOnInit(): void {
    this.holidayHomesListObs = this.holidayHomesService.getAll(1)
    
    .pipe(
      tap(items => console.log(items)),
    )
  }

}
