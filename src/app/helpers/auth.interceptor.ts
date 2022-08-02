import { HTTP_INTERCEPTORS, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import {HttpResponseCode} from './http.type'
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { LocalStorageService } from '../services/localStorage/local-storage.service';
import { NotificationService } from '../services/notification/notification.service';
const TOKEN_HEADER_KEY = 'x-access-token';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private localstorage:LocalStorageService,
      private notification:NotificationService
    ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = req;

    const token = this.localstorage.getToken();
    if (token != null) {
      authReq = req.clone({
        headers: req.headers.set(TOKEN_HEADER_KEY, token),

      });
    }
    return next.handle(authReq).pipe(
      tap(()=>{}),
      catchError((req:HttpErrorResponse)=>{
        this.handleHttpResponse(req);

        return  throwError(()=>of(req));

      })
    );
  }

  private handleHttpResponse(requestError:HttpErrorResponse):void{
      console.log(requestError)
        this.displayToastMessage(requestError.error)


  }
  private displayToastMessage(errMessage:string){
      this.notification.error(errMessage);
  }
}
export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
