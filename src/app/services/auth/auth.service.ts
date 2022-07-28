import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  login(){

    this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(data => {
      console.log(data); // using the HttpClient instance, http to call the API then subscribe to the data and display to console
    });
  }
}
