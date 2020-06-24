import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { HolidayHomesService } from '../services/holiday-homes.service';
import { OwnersService } from '../services/owners.service';
import { OwnerModel } from '../models/owner.model';

@Component({
  selector: 'app-holiday-home-list',
  templateUrl: './holiday-home-list.component.html',
  styleUrls: ['./holiday-home-list.component.css']
})
export class HolidayHomeListComponent implements OnInit {
  id: string;
  ownerObs: Observable<OwnerModel>;
  holidayHomesListObs: Observable<any>;

  constructor(
    private route: ActivatedRoute, 
    private holidayHomesService: HolidayHomesService, 
    private ownersService: OwnersService) { 
  }

  ngOnInit(): void {
    let ownerId = +this.route.snapshot.paramMap.get('ownerId');
    this.ownerObs = this.ownersService.get(ownerId);
      
    this.holidayHomesListObs = this.holidayHomesService.getAll(ownerId);
  }
}
