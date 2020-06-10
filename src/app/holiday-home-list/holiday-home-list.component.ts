import { Component, OnInit } from '@angular/core';
import { HolidayHomeModel } from '../models/holiday-home.model';
import { ImageModel } from '../models/image.model';

@Component({
  selector: 'app-holiday-home-list',
  templateUrl: './holiday-home-list.component.html',
  styleUrls: ['./holiday-home-list.component.css']
})
export class HolidayHomeListComponent implements OnInit {
  holidayHomesList: HolidayHomeModel[];

  constructor() { 
    this.holidayHomesList = [];

    let home1Image1 = new ImageModel();
    home1Image1.setModel(1,"Photos - Apartment in Roses (Canyelles Petites)", "//d1ez3020z2uu9b.cloudfront.net/imagecache/rental-homes-photos-spain/Original/30984/5807029-30984-Roses-Apartment_Crop_725_600.jpg");
    let home1Image2 = new ImageModel();
    home1Image2.setModel(2,"Photos - Apartment in Roses (Canyelles Petites)","//d1ez3020z2uu9b.cloudfront.net/imagecache/rental-homes-photos-spain/Original/30984/5807032-30984-Roses-Apartment_Crop_725_600.jpg");
    let home1Image3 = new ImageModel();
    home1Image3.setModel(3,"Photos - Apartment in Roses (Canyelles Petites)","//d1ez3020z2uu9b.cloudfront.net/imagecache/rental-homes-photos-spain/Original/30984/9007909-30984-Roses-Apartment_Crop_475_353.jpg");
    
    let home1ImageList = [];
    home1ImageList.push(home1Image1);
    home1ImageList.push(home1Image2);
    home1ImageList.push(home1Image3);
    
    let home1 = new HolidayHomeModel();
    home1.setModel(30984, "Apartment in Roses (Canyelles Petites)",2,80,true,4,20,true,1,600,true,20,10,2,home1ImageList);
    
    this.holidayHomesList.push(home1);
    
    home1 = new HolidayHomeModel();
    home1.setModel(20568, "Copy of Canyelles Petites",10,40,false,2,10,false,1,300,false,10,5,1,home1ImageList);
    
    this.holidayHomesList.push(home1);
  }

  ngOnInit(): void {
  }

}
