import { Injectable,EventEmitter } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { SignUpResponse, SignupData, LoginData,LoginResponse, User, SignIn, contact, product } from '../_models/user.model';
import { catchError, Subject, tap, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  Sent(postData: contact) {
    return this.http.post('url', postData)
  }
  
  Product(product: product) {
    return this.http.post('url', product)
  }
}
