import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HolidayHomeModel } from '../models/holiday-home.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class HolidayHomesService {
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'basic YWRtaW5AYWRtaW4uY29tOjEyMzQ1IQ=='
        })
    } 
   
    constructor(private http: HttpClient) {
    }

    getAll(ownerId: number): Observable<HolidayHomeModel[]> {
        let url = `http://localhost:50857/api/holidayhomesowners/${ownerId}/homes/`;
        
        return this.http.get<HolidayHomeModel[]>(url, this.httpOptions);
    }

    // getOne(ownerId: number, id: number): HolidayHomeModel {
    //     this.http.get("https://reqres.in/api/users?page=2").subscribe(data => {
    //         console.log(data);
    //       });
    // }

    // Post() {

    // }

    // Put() {

    // }
}