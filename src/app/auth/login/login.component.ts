import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import { LoginData } from 'src/app/_models/user.model';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  loginData : LoginData = {
    email:'',
    password:''
  }
  error:string=null

  
  constructor(
    private authService:AuthService,
    private router:Router,
    private http:HttpClient
  ) { }
  login(form:NgForm){
    console.log(form.value);
    if(!form.valid){
      return
    }
    this.isLoading=true
    this.authService.login(this.loginData).subscribe(
      res=>{
        console.log(res);
        this.isLoading=false;
        this.router.navigate(['/home'])
      },
      errMsg=>{
        console.log(errMsg);
        this.error=errMsg
        this.isLoading=false;
      }
    )

    /* 
    this.http.post<any>(
      'https://reqres.in/api/login',
      {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
        // "email":this.loginData.email,
        // "password":this.loginData.password
      }
      ).subscribe(
        res=>{
          console.log(res);
          this.authService.changeState(true);
          this.router.navigate(['/home'])
        },
        err=>{
          console.log(err);
          if(!err.error)
            this.error = "An unknown error occurred"
          this.error=err.error.error
          this.isLoading=false
          
        }
      )
    */
  }

  ngOnInit(): void {
  }

}
