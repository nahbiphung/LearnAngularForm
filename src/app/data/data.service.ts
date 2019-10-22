import { Injectable } from '@angular/core';
import { IUserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettingsForm: IUserSettings): Observable<any> {
    // return of(userSettingsForm);
    return this.http.post('https://putsreq.com/MdB0AZYLJvTTItDmnTUl', userSettingsForm);
  }

  getSubscriptionType(): Observable<string[]> {
    return of(['Annual', 'Monthly', 'Lifetime']);
  }
}
