import { ImageModel } from './image.model';

export class HolidayHomeModel {
    id: number;
    description: string; 
    bedrooms: number; 
    livingArea: number; 
    hasWiFi: boolean;
    sleeps: number; 
    terraceArea: number; 
    hasBalcony: boolean;
    bathrooms: number;
    gardenArea: number;
    hasPatio: boolean;
    distanceToAirport: number; 
    distanceToBeach: number;
    distanceToShopping: number;
    imagesList: ImageModel[];
    ownerId: number;

    constructor() { 
        this.imagesList = [];
    }

    setModel(
        newId: number, 
        newDescription: string, 
        newBedrooms: number, 
        newLivingArea: number, 
        newHasWiFi: boolean,
        newSleeps: number, 
        newTerraceArea: number, 
        newHasBalcony: boolean,
        newBathrooms: number,
        newGardenArea: number,
        newHasPatio: boolean,
        newDistanceToAirport: number, 
        newDistanceToBeach: number,
        newDistanceToShopping: number,
        newImagesList: ImageModel[],
        newOwnerId: number){
            this.id = newId;
            this.description = newDescription ; 
            this.bedrooms = newBedrooms; 
            this.livingArea = newLivingArea; 
            this.hasWiFi = newHasWiFi;
            this.sleeps = newSleeps; 
            this.terraceArea = newTerraceArea; 
            this.hasBalcony = newHasBalcony;
            this.bathrooms = newBathrooms;
            this.gardenArea = newGardenArea;
            this.hasPatio = newHasPatio;
            this.distanceToAirport = newDistanceToAirport; 
            this.distanceToBeach = newDistanceToBeach;
            this.distanceToShopping = newDistanceToShopping;
            this.imagesList = newImagesList;
            this.ownerId = newOwnerId;
    }
}