import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import {  Observable } from 'rxjs';
import {map, take} from 'rxjs/operators'
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate 
{
  constructor(
    private authService:AuthService,
    private router:Router){

  }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.user.pipe(
      take(1),
      map(user=>{
      const isLogin = !!user;   
      if(isLogin){
        return true
      }
      this.router.navigate(['/login']);
      return false;
    }));
  }
  
}
