import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignInServiceService } from './sign-in-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserGaurdGuard implements CanActivate {
  constructor(private login:SignInServiceService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.login.isLoggedin())
      {
        return true
      }
      alert("You Need to Login First to add songs")
      this.router.navigate(['login']);

    return false;
  }
  
}
