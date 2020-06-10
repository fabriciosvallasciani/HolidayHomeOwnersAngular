import { Component, OnInit } from '@angular/core';
import { HolidayHomeModel } from '../models/holiday-home.model';
import { ImageModel } from '../models/image.model';

@Component({
  selector: 'app-holiday-home-form',
  templateUrl: './holiday-home-form.component.html',
  styleUrls: ['./holiday-home-form.component.css']
})
export class HolidayHomeFormComponent implements OnInit {
  newHolidayHome: HolidayHomeModel;

  constructor() {
    this.newHolidayHome = new HolidayHomeModel();
  }

  ngOnInit(): void {
    
  }

  addHome(newDescription: HTMLInputElement, 
    newBedrooms: HTMLInputElement, 
    newLivingArea: HTMLInputElement, 
    newHasWiFi: HTMLInputElement, 
    newSleeps: HTMLInputElement, 
    newTerraceArea: HTMLInputElement, 
    newHasBalcony: HTMLInputElement, 
    newBathrooms: HTMLInputElement, 
    newGardenArea: HTMLInputElement, 
    newHasPatio: HTMLInputElement, 
    newDistanceToAirport: HTMLInputElement, 
    newDistanceToBeach: HTMLInputElement, 
    newDistanceToShopping: HTMLInputElement): boolean{
      this.newHolidayHome.setModel(
        null,
        newDescription.value, 
        +newBedrooms.value, 
        +newLivingArea.value, 
        newHasWiFi.value === 'true', 
        +newSleeps.value, 
        +newTerraceArea.value, 
        newHasBalcony.value === 'true', 
        +newBathrooms.value, 
        +newGardenArea.value, 
        newHasPatio.value  === 'true', 
        +newDistanceToAirport.value, 
        +newDistanceToBeach.value, 
        +newDistanceToShopping.value,
        null
      );

    return false;
  }
}
