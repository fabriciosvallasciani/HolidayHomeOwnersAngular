import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { OwnersService } from '../services/owners.service';
import { OwnerModel } from '../models/owner.model';
import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @Input() faTelephone: any = faPhone;
  @Input() faEmail: any = faMailBulk;
  ownersListObs: Observable<OwnerModel[]>;

  constructor(
    private ownersService: OwnersService) {
  }

  ngOnInit(): void {
    this.ownersListObs = this.ownersService.getAll();    
  }
}
