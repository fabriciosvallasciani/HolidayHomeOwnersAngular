import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { HolidayHomeOwnerModel } from '../models/holiday-home-owner.model';

@Injectable({
  providedIn: "root"
})
export class HolidayHomesOwnersService {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'basic YWRtaW5AYWRtaW4uY29tOjEyMzQ1IQ=='
    })
  } 
   
  constructor(private http: HttpClient) {

  }

  getAll(): Observable<HolidayHomeOwnerModel[]> {
    let url = `http://localhost:50857/api/holidayhomesowners/`;
        
    return this.http.get<HolidayHomeOwnerModel[]>(url, this.httpOptions);
  }
}