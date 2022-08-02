import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service'
import jwt_decode from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private localStorageService:LocalStorageService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token=this.localStorageService.getToken();
      if(!!token){
        const user:any = jwt_decode(token);
        if(user?.role==2) return true;
      }
      return false;
  }

}
