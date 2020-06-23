import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable} from 'rxjs';
import { OwnerModel } from '../models/owner.model';
import { catchError } from 'rxjs/operators';
import { BaseHttpService } from './base-http.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: "root"
})
export class OwnersService extends BaseHttpService {   
  constructor(private http: HttpClient, public notificationService: NotificationService) {
    super(notificationService);
  }

  get(id: number): Observable<OwnerModel> {
    let url = `http://localhost:50857/api/owners/${id}`;
        
    return this.http.get<OwnerModel>(url)
      .pipe(
        catchError(this.handleError)
    );
  }

  getAll(): Observable<OwnerModel[]> {
    let url = `http://localhost:50857/api/owners/`;
        
    return this.http.get<OwnerModel[]>(url)
      .pipe(
        catchError(this.handleError)
    );
  }
}