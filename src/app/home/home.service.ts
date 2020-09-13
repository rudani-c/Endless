import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Urls } from '../shared/urls.constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  public getStepsData(): Observable<any> {
    return this.http.get(Urls.GET_STEPS_URL);
  }
}
