import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { OwnerModel } from '../models/owner.model';

@Injectable({
  providedIn: "root"
})
export class OwnersService {   
  constructor(private http: HttpClient) {

  }

  getAll(): Observable<OwnerModel[]> {
    let url = `http://localhost:50857/api/owners/`;
        
    return this.http.get<OwnerModel[]>(url);
  }
}