import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holiday-home-list',
  templateUrl: './holiday-home-list.component.html',
  styleUrls: ['./holiday-home-list.component.css']
})
export class HolidayHomeListComponent implements OnInit {
  holidayHomesList: any[];

  constructor() { 
    this.holidayHomesList = [
      {
        "id": 30984,
        "description": "Apartment in Roses (Canyelles Petites)",
        "bedrooms": 2, 
        "livingArea": 80,
        "hasWiFi": true,
        "sleeps": 4,
        "terraceArea": 20,
        "hasBalcony": true,
        "bathrooms": 1,
        "gardenArea": 600,
        "hasPatio": true,
        "distanceToAirport": 45,
        "distanceToBeach": 16,
        "distanceToShopping": 16,
        "imageList":
        [
          {
            "src": "//d1ez3020z2uu9b.cloudfront.net/imagecache/rental-homes-photos-spain/Original/30984/5807029-30984-Roses-Apartment_Crop_725_600.jpg",
            "alt": "Photos - Apartment in Roses (Canyelles Petites)"
          },
          {
            "src": "//d1ez3020z2uu9b.cloudfront.net/imagecache/rental-homes-photos-spain/Original/30984/5807032-30984-Roses-Apartment_Crop_725_600.jpg",
            "alt": "Photos - Apartment in Roses (Canyelles Petites)"
          },
          {
            "src": "//d1ez3020z2uu9b.cloudfront.net/imagecache/rental-homes-photos-spain/Original/30984/9007909-30984-Roses-Apartment_Crop_475_353.jpg",
            "alt": "Photos - Apartment in Roses (Canyelles Petites)"
          }          
        ]
      },
      {
        "id": 30984,
        "description": "Apartment in Roses (Canyelles Petites)",
        "bedrooms": 2, 
        "livingArea": 80,
        "hasWiFi": true,
        "sleeps": 4,
        "terraceArea": 20,
        "hasBalcony": true,
        "bathrooms": 1,
        "gardenArea": 600,
        "hasPatio": true,
        "distanceToAirport": 45,
        "distanceToBeach": 16,
        "distanceToShopping": 16,
        "imageList":
        [
          {
            "src": "//d1ez3020z2uu9b.cloudfront.net/imagecache/rental-homes-photos-spain/Original/30984/5807029-30984-Roses-Apartment_Crop_725_600.jpg",
            "alt": "Photos - Apartment in Roses (Canyelles Petites)"
          },
          {
            "src": "//d1ez3020z2uu9b.cloudfront.net/imagecache/rental-homes-photos-spain/Original/30984/5807032-30984-Roses-Apartment_Crop_725_600.jpg",
            "alt": "Photos - Apartment in Roses (Canyelles Petites)"
          },
          {
            "src": "//d1ez3020z2uu9b.cloudfront.net/imagecache/rental-homes-photos-spain/Original/30984/9007909-30984-Roses-Apartment_Crop_475_353.jpg",
            "alt": "Photos - Apartment in Roses (Canyelles Petites)"
          }          
        ]
      },
      {
        "id": 30984,
        "description": "Apartment in Roses (Canyelles Petites)",
        "bedrooms": 2, 
        "livingArea": 80,
        "hasWiFi": true,
        "sleeps": 4,
        "terraceArea": 20,
        "hasBalcony": true,
        "bathrooms": 1,
        "gardenArea": 600,
        "hasPatio": true,
        "distanceToAirport": 45,
        "distanceToBeach": 16,
        "distanceToShopping": 16,
        "imageList":
        [         
        ]
      }
    ];
  }

  ngOnInit(): void {
  }

}
