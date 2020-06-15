import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { HolidayHomesOwnersService } from '../services/holiday-homes-owners.service';
import { HolidayHomeOwnerModel } from '../models/holiday-home-owner.model';
import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @Input() faTelephone: any = faPhone;
  @Input() faEmail: any = faMailBulk;
  ownersListObs: Observable<HolidayHomeOwnerModel[]>;

  constructor(private ownersService: HolidayHomesOwnersService) {
  }

  ngOnInit(): void {
    this.ownersListObs = this.ownersService.getAll();
  }

}
