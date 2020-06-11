import { Component, OnInit } from '@angular/core';
import { ImageModel } from '../models/image.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HolidayHomeModel } from '../models/holiday-home.model';

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
      description: [''],
      bedrooms: [''], 
      livingArea: [''], 
      hasWiFi: [''],
      sleeps: [''],
      terraceArea: [''],
      hasBalcony: [''],
      bathrooms: [''],
      gardenArea: [''],
      hasPatio: [''],
      distanceToAirport: [''], 
      distanceToBeach: [''],
      distanceToShopping: ['']
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
