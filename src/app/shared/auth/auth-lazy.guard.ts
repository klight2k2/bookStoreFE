import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLazyGuard implements CanLoad {
  constructor(private localStorageService: LocalStorageService) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this.localStorageService.getToken();
    if (!!token) {
      console.log(token);

      return true;
    }
    return false
  }
}
