export class OwnerModel {
    id: number;
    firstName: string; 
    lastName: string; 
    telephone: number; 
    email: string;

    constructor() { }

    setModel(
        newId: number,
        newFirstName: string, 
        newLastName: string, 
        newTelephone: number, 
        newEmail: string){
            this.id = newId; 
            this.firstName = newFirstName; 
            this.lastName = newLastName; 
            this.telephone = newTelephone; 
            this.email= newEmail;
    }
}