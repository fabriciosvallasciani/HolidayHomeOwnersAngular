import { Component, OnInit } from '@angular/core';
import { ImageModel } from '../models/image.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HolidayHomeModel } from '../models/holiday-home.model';
import { positiveNumberTo255Validator } from '../shared/custom-validator-positive-number-to-255.component';
import { positiveNumberValidator } from '../shared/custom-validator-positive-number.component';
import { HolidayHomesService } from '../services/holiday-homes.service';
import { OwnersService } from '../services/owners.service';
import { OwnerModel } from '../models/owner.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-holiday-home-form',
  templateUrl: './holiday-home-form.component.html',
  styleUrls: ['./holiday-home-form.component.css']
})
export class HolidayHomeFormComponent implements OnInit {
  ownersListObs: Observable<OwnerModel[]>;
  imagesList: ImageModel[];
  homeForm: FormGroup;
  isFormForNew: boolean = true;

  constructor(private fb: FormBuilder,private ownersService: OwnersService, private holidayHomesService: HolidayHomesService) {
    this.imagesList = [];

    this.homeForm = this.fb.group({
      id: [''],
      ownerId: [''],
      description: ['', Validators.required],
      bedrooms: ['', Validators.compose([Validators.required, positiveNumberTo255Validator])], 
      livingArea: ['', positiveNumberValidator], 
      hasWiFi: [''],
      sleeps: ['', Validators.compose([Validators.required, positiveNumberTo255Validator])],
      terraceArea: ['', positiveNumberValidator],
      hasBalcony: [''],
      bathrooms: ['', Validators.compose([Validators.required, positiveNumberTo255Validator])],
      gardenArea: ['', positiveNumberValidator],
      hasPatio: [''],
      distanceToAirport: ['', positiveNumberTo255Validator], 
      distanceToBeach: ['', positiveNumberTo255Validator],
      distanceToShopping: ['', positiveNumberTo255Validator]
    });
  }

  ngOnInit(): void {
    this.ownersListObs = this.ownersService.getAll();
  }

  onSubmit(homeModelWithoutImagesList: any): boolean{
    let holidayHome = new HolidayHomeModel;
    holidayHome = homeModelWithoutImagesList;
    holidayHome.imagesList = this.imagesList;

    if(this.isFormForNew)
    {
      this.holidayHomesService.Post(this.homeForm.value.ownerId, holidayHome);
    }
    else {
      // TODO: put here
    }

    return false;
  }

  onImagesListChange(newImagesList: ImageModel[]){
    this.imagesList = newImagesList;
  }
}
