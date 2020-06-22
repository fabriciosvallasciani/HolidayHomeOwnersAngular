import { HttpErrorResponse } from "@angular/common/http";
import { throwError} from 'rxjs';
import { NotificationService } from './notification.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class BaseHttpService {   
  constructor(public notificationService: NotificationService) {
  }
  
  public onSuccess = (data: any, message: string, title: string): void => {    
    this.notificationService.showSuccess(message, title);
  }

  public handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      this.notificationService.showError(`An error occurred: ${error.error.message}`,'Owners service');
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      this.notificationService.showError(
        `Backend returned code ${error.status} body was: ${error.error}`, 'Owners service');
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}