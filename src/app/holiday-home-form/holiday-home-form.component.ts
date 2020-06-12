import { Component, OnInit } from '@angular/core';
import { ImageModel } from '../models/image.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HolidayHomeModel } from '../models/holiday-home.model';
import { positiveNumberTo255Validator } from '../shared/custom-validator-positive-number-to-255.component';
import { positiveNumberValidator } from '../shared/custom-validator-positive-number.component';

@Component({
  selector: 'app-holiday-home-form',
  templateUrl: './holiday-home-form.component.html',
  styleUrls: ['./holiday-home-form.component.css']
})
export class HolidayHomeFormComponent implements OnInit {
  imageList: ImageModel[];
  homeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.imageList = [];

    this.homeForm = this.fb.group({
      id: [''],
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
    
  }

  onSubmit(homeModelWithoutImageList: any): boolean{
    let holidayHome = new HolidayHomeModel;
    holidayHome = homeModelWithoutImageList;
    holidayHome.imageList = this.imageList;

    return false;
  }

  onImageListChange(newImageList: ImageModel[]){
    this.imageList = newImageList;
  }
}
