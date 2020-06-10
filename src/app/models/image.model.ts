export class ImageModel {
    id: number;
    url: string;  
    alt: string;

    constructor() {}

    setModel(
        newId: number,         
        newAlt: string,
        newUrl: string) {
            this.id = newId || 0;
            this.url = newUrl; 
            this.alt = newAlt || ''; 
    }
}