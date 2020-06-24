import { Component, OnInit, Input } from '@angular/core';
import { faPlane, faUmbrellaBeach, faShoppingBag, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { ModalConfirmComponent } from 'src/app/modal-confirm/modal-confirm.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { HolidayHomesService } from 'src/app/services/holiday-homes.service';

@Component({
  selector: 'app-holiday-home-item-info-bottom',
  templateUrl: './holiday-home-item-info-bottom.component.html',
  styleUrls: ['./holiday-home-item-info-bottom.component.css']
})
export class HolidayHomeItemInfoBottomComponent implements OnInit {
  modalRef: any;
  
  @Input() ownerId: number;
  @Input() homeId: number;
  @Input() homeDescription: string;

  @Input() distanceToAirport: number;
  @Input() distanceToBeach: number;
  @Input() distanceToShopping: number;

  @Input() faDistanceToAirport: any = faPlane;
  @Input() faDistanceToBeach: any = faUmbrellaBeach;
  @Input() faDistanceToShopping: any = faShoppingBag;
  @Input() faEdit: any = faEdit;
  @Input() faDelete: any = faTrashAlt;
  constructor(private modalService: NgbModal, private homeService: HolidayHomesService) {}

  ngOnInit(): void {
  } 

  openModalForDelete() {
    this.modalRef = this.modalService.open(ModalConfirmComponent);
    this.modalRef.componentInstance.title = "Delete holiday home";
    this.modalRef.componentInstance.bodyText = `Are you sure you want to delete ${this.homeDescription}?`;
    this.modalRef.result.then((result) => {
      if (result === 'Ok click'){
        this.deleteHome();
      }
    });
  }

  deleteHome(){
    this.homeService.delete(this.ownerId, this.homeId);
  }
}
