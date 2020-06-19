export class ImageModel {
    id: number;
    url: string;  
    description: string;

    constructor() {}

    setModel(
        newId: number,         
        newDescription: string,
        newUrl: string) {
            this.id = newId || 0;
            this.url = newUrl; 
            this.description = newDescription || ''; 
    }
}