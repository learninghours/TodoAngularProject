import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticaionService } from './hardcoded-authenticaion.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService implements CanActivate{

   constructor(private hcAuthentication: HardcodedAuthenticaionService,
    private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hcAuthentication.isUserLoggedIn()){
      return true;
    }
     this.router.navigate(['login']);
     return false;
  }

 
}
