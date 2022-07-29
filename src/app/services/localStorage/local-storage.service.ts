import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  protected localStorage:Storage;
  prefix='book';
  constructor() {
    this.localStorage=window.localStorage;
  }

  public set(key:string, value:any){
    this.localStorage.setItem(this.getKey(key),JSON.stringify(value));
  }

  public get(key:string){
    try{

      console.log(JSON.parse(this.localStorage.getItem(this.getKey(key)) || '') ,'hê');
      return JSON.parse(this.localStorage.getItem(this.getKey(key)) || '');
    }catch(er){
      console.log(er);

    }
  }

  public remove(key:string){
    this.localStorage.removeItem(this.getKey(key));
  }

  public clear(){
    this.localStorage.clear();
  }

  private getKey(key:string){
    return `${this.prefix}_${key}`;
  }

  public getToken(){
    return this.get('token') || '';
  }
  public setToken(token:string){
    console.log(token,"nay");

     this.set('token',token)
  }
  public removeToken(){
     this.remove('token')
  }
}
