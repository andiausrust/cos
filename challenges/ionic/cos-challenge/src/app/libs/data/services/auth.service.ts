import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AuthRequestModel, AuthResponseModel } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  baseUrl = environment.v1BaseUrl;

  constructor(private http: HttpClient) {}

  login(user: AuthRequestModel): Observable<AuthResponseModel> {
    const userMailId = encodeURIComponent(user.email);
    return this.http.put<AuthResponseModel>(`${this.baseUrl}/authentication/${userMailId}`, {
      password: user.password,
      meta: ''
    });
  }

  registered(response: AuthResponseModel): void {
    this.http.get(`${this.baseUrl}/authentication/${response.userId}/registered`)
      .subscribe();
  }

}
