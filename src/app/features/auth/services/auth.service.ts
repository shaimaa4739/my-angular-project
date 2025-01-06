import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterObj, LoginObj } from '../models/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://upskilling-egypt.com:3007';

  constructor(private _http:HttpClient) { }

  register(registerObj: RegisterObj):Observable<any>{
    return this._http.post(`${this.apiUrl}/api/auth/register`,registerObj)
  }

  login(loginObj: LoginObj):Observable<any>{
    return this._http.post(`${this.apiUrl}/api/auth/login`,loginObj)
  }
}
