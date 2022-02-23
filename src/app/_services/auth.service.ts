import { Injectable,EventEmitter } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { SignUpResponse, SignupData, LoginData,LoginResponse, User } from '../_models/user.model';
import { catchError, Subject, tap, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  user = new Subject <User>();
  
  isAuth :EventEmitter<boolean> = new EventEmitter<boolean>()
  /* --------------------------- signup */
  signup(signupData:SignupData){
    return this.http.post<{
      id?: string,
      token?:string,
      error?:string
    }>('https://reqres.in/api/register',
    {
      "email": "eve.holt@reqres.in",
      "password": "pistol"
      /* "email":signupData.email,
      "password":signupData.password */
  }).pipe(
      catchError(this.handleError)
      ,
      tap(res=>{
        // expiresIn -> seconds
        // const expirationDate = new Date(new Date().getTime() + +res.expiresIn);
        const user = new User(res.id, res.token)
        this.user.next(user);
        
        
      })
    )
  }

/* --------------------- login */
  login(loginData:LoginData){
    return this.http.post<{
      id?: string,
      token?:string,
      error?:string
    }>('https://reqres.in/api/login',
    {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
      /* "email":loginData.email,
      "password":loginData.password */
  }).pipe(
      catchError(this.handleError)
      ,
      tap(res=>{
        // expiresIn -> seconds
        // const expirationDate = new Date(new Date().getTime() + +res.expiresIn);
        const user = new User(res.id, res.token)
        this.user.next(user);
        this.isAuth.emit(true)
      })
      )
  }

  private handleError(err:HttpErrorResponse){
    let errMsg = 'An unknown error occurred!'
        if(!err.error ){
          return throwError(()=> new Error(errMsg));
        }
        switch(err.message){
          
          default:
            errMsg = err.error.error

        }
        return throwError(()=>new Error(errMsg))
  }
}
