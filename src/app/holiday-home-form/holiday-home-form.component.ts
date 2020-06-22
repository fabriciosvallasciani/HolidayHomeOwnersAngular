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
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

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

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private ownersService: OwnersService, 
    private holidayHomesService: HolidayHomesService) {
    this.imagesList = [];

    this.homeForm = this.fb.group({
      id: [''],
      ownerId: [''],
      description: ['', Validators.required],
      bedrooms: ['', Validators.compose([Validators.required, positiveNumberTo255Validator])], 
      livingArea: ['', positiveNumberValidator], 
      hasWiFi: [false],
      sleeps: ['', Validators.compose([Validators.required, positiveNumberTo255Validator])],
      terraceArea: ['', positiveNumberValidator],
      hasBalcony: [false],
      bathrooms: ['', Validators.compose([Validators.required, positiveNumberTo255Validator])],
      gardenArea: ['', positiveNumberValidator],
      hasPatio: [false],
      distanceToAirport: ['', positiveNumberTo255Validator], 
      distanceToBeach: ['', positiveNumberTo255Validator],
      distanceToShopping: ['', positiveNumberTo255Validator]
    });
  }

  ngOnInit(): void {
    this.ownersListObs = this.ownersService.getAll();

    if (this.route.snapshot.queryParamMap.get('mode') === 'edit') {
      this.isFormForNew = false;

      let ownerId = +this.route.snapshot.paramMap.get('ownerId');
      let homeId = +this.route.snapshot.paramMap.get('homeId');
      let holidayHomeObs = this.holidayHomesService.get(ownerId, homeId)
        .pipe(take(1)).subscribe(
          home => {
            this.homeForm.controls['id'].setValue(home.id);
            this.homeForm.controls['ownerId'].setValue(home.ownerId);
            this.homeForm.controls['description'].setValue(home.description);
            this.homeForm.controls['bedrooms'].setValue(home.bedrooms);
            this.homeForm.controls['livingArea'].setValue(home.livingArea);
            this.homeForm.controls['hasWiFi'].setValue(home.hasWiFi);
            this.homeForm.controls['sleeps'].setValue(home.sleeps);
            this.homeForm.controls['terraceArea'].setValue(home.terraceArea);
            this.homeForm.controls['hasBalcony'].setValue(home.hasBalcony);
            this.homeForm.controls['bathrooms'].setValue(home.bathrooms);
            this.homeForm.controls['gardenArea'].setValue(home.gardenArea);
            this.homeForm.controls['hasPatio'].setValue(home.hasPatio);
            this.homeForm.controls['distanceToAirport'].setValue(home.distanceToAirport);
            this.homeForm.controls['distanceToBeach'].setValue(home.distanceToBeach);
            this.homeForm.controls['distanceToShopping'].setValue(home.distanceToShopping);

            this.imagesList = home.imagesList;
        });
    }
  }

  onSubmit(homeModelWithoutImagesList: any): boolean{
    let holidayHome = new HolidayHomeModel;
    holidayHome = homeModelWithoutImagesList;
    holidayHome.imagesList = this.imagesList;

    if(this.isFormForNew)
    {
      this.holidayHomesService.post(holidayHome);
    }
    else {
      let ownerId = +this.route.snapshot.paramMap.get('ownerId');
      this.holidayHomesService.update(ownerId, holidayHome);
    }

    return false;
  }

  onImagesListChange(newImagesList: ImageModel[]){
    this.imagesList = newImagesList;
  }
}
