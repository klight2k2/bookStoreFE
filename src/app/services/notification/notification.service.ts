import { Injectable } from '@angular/core';

import {NzNotificationPlacement,NzNotificationService} from "ng-zorro-antd/notification"

type NotifyType="success"|"info"|"warning"| "error"|"blank";

interface NoticationInterface{
  type:NotifyType;
  message:string,
  title:string;
  position?:NzNotificationPlacement;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notification:NzNotificationService) { }

  success(message:string,title=""):void{
    return this.notify({type:"success",message,title})
  }
  error(message:string,title=""):void{
    return this.notify({type:"error",message,title})
  }
  warning(message:string,title=""):void{
    return this.notify({type:"warning",message,title})
  }
  info(message:string,title=""):void{
    return this.notify({type:"info",message,title})
  }
  blank(message:string,title=""):void{
    return this.notify({type:"blank",message,title})
  }

  notify(
    {type,message,title,position}:NoticationInterface={type:"blank",message:"",title:"",position:"topRight"},  ){
      this.notification.create(type,title,message,{
        nzPlacement:position,
        nzAnimate:true,
        nzDuration:5000
      })
}
}
