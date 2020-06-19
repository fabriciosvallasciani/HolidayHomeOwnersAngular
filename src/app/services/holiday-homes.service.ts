import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HolidayHomeModel } from '../models/holiday-home.model';

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

  Post(newHome: HolidayHomeModel) : Observable<HolidayHomeModel> {
    let url = `http://localhost:50857/api/owners/${newHome.ownerId}/homes/`;

    console.log(url);
    console.log(newHome);
    console.log(localStorage.getItem('authorization'));

    return this.http.post<HolidayHomeModel>(url, newHome, this.httpOptions)
      .pipe(
        catchError(this.handleError)
    );
  }

  // Put() {

  // }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}