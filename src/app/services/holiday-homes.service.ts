import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HolidayHomeModel } from '../models/holiday-home.model';
import { BaseHttpService } from './base-http.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: "root"
})
export class HolidayHomesService extends BaseHttpService {
  // TODO: get this credentials info from the backend by auth service
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('authorization')
    })
  } 
   
  constructor(private http: HttpClient, public notificationService: NotificationService) {
    super(notificationService);
  }

  getAll(ownerId: number): Observable<HolidayHomeModel[]> {
    let url = `http://localhost:50857/api/owners/${ownerId}/homes/`;
        
    return this.http.get<HolidayHomeModel[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // getOne(ownerId: number, id: number): HolidayHomeModel {
  //     this.http.get("https://reqres.in/api/users?page=2").subscribe(data => {
  //         console.log(data);
  //       });
  // }

  Post(newHome: HolidayHomeModel) : void {
    let url = `http://localhost:50857/api/owners/${newHome.ownerId}/homes/`;

    this.http.post<HolidayHomeModel>(url, newHome, this.httpOptions)
      .subscribe(
        (data) => this.onSuccess(data,'Added successfully','New holiday home'),
        (error) => this.handleError(error)
      );
  }

  // Put() {

  // };
}