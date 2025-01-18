import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterObj, LoginObj, ForgetPasswordObj, ChangePasswordObj, ConfirmOtpObj } from '../models/register';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://upskilling-egypt.com:3007/api/auth/';

  constructor(private _http:HttpClient,private _router:Router) { }

  register(registerObj: RegisterObj):Observable<any>{
    return this._http.post(`${this.apiUrl}register`,registerObj)
  }

  login(loginObj: LoginObj):Observable<any>{
    return this._http.post(`${this.apiUrl}login`,loginObj)
  }

  sendOtpToEmail(forgetPasswordObj: ForgetPasswordObj):Observable<any>{
    return this._http.post(`${this.apiUrl}forgot-password`,forgetPasswordObj)
  }

  confirmOtp(confirmOtp: ConfirmOtpObj):Observable<any>{
    return this._http.post(`${this.apiUrl}reset-password`,confirmOtp)
  }

  changePassword(changePasswordObj: ChangePasswordObj):Observable<any>{
    return this._http.post(`${this.apiUrl}change-password`,changePasswordObj)
  }

  logout(){
    this._router.navigate(['./login'])
    localStorage.removeItem('loggedIn')
    localStorage.removeItem("token")
    localStorage.removeItem("refershToken")
  }
}
