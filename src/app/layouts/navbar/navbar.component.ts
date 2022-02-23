import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isLogin =false;
  current='home';
  userSub : Subscription
  changeActive(active:string){
    this.current=active;
  }
 
  constructor(private authService:AuthService) { }
  

  ngOnInit(): void {
    
    this.userSub = this.authService.user.subscribe(
      user=>{
        this.isLogin = !!user
      }
    )
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe()
  }

}
