import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { differenceInCalendarDays } from 'date-fns';
import { AdminService } from './../../../../services/admin/admin.service';
import { BaseComponent } from 'src/app/core/base/base/base.component';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent extends BaseComponent  implements OnInit {
  today = new Date();
  public data:any;
  public userForm!:FormGroup;
  constructor(private fb: FormBuilder,
              private adminService:AdminService,
              private commonService:CommonService,
              private _router:Router
    ) {
  super()

    }


  override preInit(){
    this.subscribeUntilDestroy(this.adminService.userDetail$,(data:any)=>{

      this.userForm=this.fb.group({
        email:new FormControl(data.email,[Validators.required,Validators.email]),
        password:new FormControl(data.password,[Validators.required]),
        sex:new FormControl(data.sex,[Validators.required]),
        fullname:new FormControl(data.fullname,[Validators.required]),
        dob:new FormControl(data.DOB,[Validators.required]),
        phone_number:new FormControl(data.phone_number,[Validators.required,Validators.pattern(new RegExp("[0-9 ]{10}"))]),
        address:new FormControl(data.address,[Validators.required]),
        role_id:new FormControl(data.role_id,[Validators.required]),
        id:new FormControl(data.role_id),
      })
    })

  }

  disabledDate = (current: Date): boolean =>
  // Can not select days before today and today
  differenceInCalendarDays(current, this.today) > 0;


  navigate(address:string){
    this._router.navigate([address]);
  }
  saveUser(){
    console.log(this.userForm.value);
    this.subscribeOnce( this.adminService.updateUser(this.userForm.value),(res:any)=>{
      this.commonService.notifySuccess(res)
      if(res.code=200) this.navigate('/admin')

    })

  }
}
