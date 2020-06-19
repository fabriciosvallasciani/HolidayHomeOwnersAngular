import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HolidayHomeModel } from '../models/holiday-home.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class HolidayHomesService {
  // TODO: get this credentials info from the backend by auth service
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('authorization')
    })
  } 
   
  constructor(private http: HttpClient) {
  }

  getAll(ownerId: number): Observable<HolidayHomeModel[]> {
    let url = `http://localhost:50857/api/owners/${ownerId}/homes/`;
        
    return this.http.get<HolidayHomeModel[]>(url);
  }

  // getOne(ownerId: number, id: number): HolidayHomeModel {
  //     this.http.get("https://reqres.in/api/users?page=2").subscribe(data => {
  //         console.log(data);
  //       });
  // }

  Post(ownerId: number, newHome: HolidayHomeModel) {
    let url = `http://localhost:50857/api/owners/${ownerId}/homes/`;
        
    return this.http.post<HolidayHomeModel[]>(url, this.httpOptions);
  }

  // Put() {

  // }
}