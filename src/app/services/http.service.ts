import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { ActivityGroup } from '../models';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseURL: string = env.baseAPIURL || '';
  private email: string = 'enurhaq@gmail.com';

  constructor(private http: HttpClient) {}

  getActivities(): Observable<ActivityGroup> {
    const params = new HttpParams().set('email', this.email);
    return this.http.get<ActivityGroup>(`${this.baseURL}/activity-groups`, {
      params,
    });
  }
}
