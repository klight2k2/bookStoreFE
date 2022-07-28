// import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import {
//   HttpInterceptor,
//   HttpHandler,
//   HttpRequest,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { LocalStorageService } from '../services/localStorage/local-storage.service';
// const TOKEN_HEADER_KEY = 'x-access-token';
// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(private localstorage:LocalStorageService ) {}
//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     let authReq = req;
//     const token = this.localstorage.getToken();
//     console.log(token);
//     if (token != null) {
//       authReq = req.clone({
//         headers: req.headers.set(TOKEN_HEADER_KEY, token),

//       });
//     }
//     return next.handle(authReq);
//   }
// }
// export const authInterceptorProviders = [
//   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
// ];
