import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { SignupData } from 'src/app/_models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isLoading = false;
  signupData : SignupData = {
    firstName:'',
    lastName:'',
    email:'',
    password:''
  }
  error:string=null
  constructor(
    private authService:AuthService,
    private router:Router
    ) { }
  
  signup(form:NgForm){
    console.log(form.value);
    if(!form.valid){
      return
    }
    this.isLoading=true
    this.authService.signup(this.signupData).subscribe(
      res=>{
        console.log(res);
        this.isLoading=false;
        this.router.navigate(['/login'])
      },
      errMsg=>{
        console.log(errMsg);
        this.error=errMsg
        this.isLoading=false;
      }
    )
    /* 
    this.http.post<any>(
      'https://reqres.in/api/register',
      {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
        // "email":this.signupData.email,
        // "password":this.signupData.password
      }
      ).subscribe(
        res=>{
          console.log(res);
  
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
