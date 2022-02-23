import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { SignupData } from 'src/app/_models/user.model';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isLoading = false;
  signupData:SignupData
  error:string=null
  constructor(private authService:AuthService) { }
  
  signup(form:NgForm){
    // console.log(form.value);
    if(!form.valid){
      return
    }
    this.isLoading=true
    this.authService.signup(this.signupData).subscribe(
      res=>{
        console.log(res);
        this.isLoading=false;
      },
      errMsg=>{
        console.log(errMsg);
        this.error=errMsg
        this.isLoading=false;
      }
    )
      
  }

  ngOnInit(): void {
  }

}
