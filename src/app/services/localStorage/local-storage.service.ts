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
    return JSON.parse(this.localStorage.getItem(this.getKey(key)) || '');
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
}
