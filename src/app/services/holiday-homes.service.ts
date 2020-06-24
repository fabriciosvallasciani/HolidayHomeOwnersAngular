import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HolidayHomeModel } from '../models/holiday-home.model';
import { BaseHttpService } from './base-http.service';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';

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
   
  constructor(private http: HttpClient, private router: Router ,public notificationService: NotificationService) {
    super(notificationService);
  }

  getAll(ownerId: number): Observable<HolidayHomeModel[]> {
    let url = `http://localhost:50857/api/owners/${ownerId}/homes/`;
        
    return this.http.get<HolidayHomeModel[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  get(ownerId: number, homeId: number): Observable<HolidayHomeModel> {
    let url = `http://localhost:50857/api/owners/${ownerId}/homes/${homeId}`;
        
    return this.http.get<HolidayHomeModel>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  post(newHome: HolidayHomeModel) : void {
    let url = `http://localhost:50857/api/owners/${newHome.ownerId}/homes/`;

    this.http.post<HolidayHomeModel>(url, newHome, this.httpOptions)
      .subscribe(
        (data) => {
          this.router.navigate([`/owners/${data.ownerId}/holidayhomes`]);
          this.onSuccess(data,'Added successfully','New holiday home')
        },
        (error) => this.handleError(error)
      );
  }

  update(ownerId: number, newHome: HolidayHomeModel) : void {
    let url = `http://localhost:50857/api/owners/${ownerId}/homes/${newHome.id}`;

    this.http.put<HolidayHomeModel>(url, newHome, this.httpOptions)
      .subscribe(
        (data) => {
          this.router.navigate([`/owners/${newHome.ownerId}/holidayhomes`]);
          this.onSuccess(data,'Updated successfully','Edit holiday home')
        },
        (error) => this.handleError(error)
      );
  }

  delete(ownerId: number, homeId: number) : void {
    let url = `http://localhost:50857/api/owners/${ownerId}/homes/${homeId}`;

    this.http.delete(url, this.httpOptions)
      .subscribe(
        (data) => {
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([`/owners/${ownerId}/holidayhomes`]);
          this.onSuccess(data,'Deleted successfully','Delete holiday home')
        },
        (error) => this.handleError(error)
      );
  }
}