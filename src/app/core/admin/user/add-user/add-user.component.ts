import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { differenceInCalendarDays } from 'date-fns';
import { AdminService } from './../../../../services/admin/admin.service';
import { BaseComponent } from 'src/app/core/base/base/base.component';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent extends BaseComponent implements OnInit {
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

    navigate(address:string){
      this._router.navigate([address]);
    }
  override preInit(){
    this.subscribeUntilDestroy(this.adminService.userDetail$,(data:any)=>{

      this.userForm=this.fb.group({
        email:new FormControl('',[Validators.required,Validators.email]),
        password:new FormControl('',[Validators.required]),
        sex:new FormControl('male',[Validators.required]),
        fullname:new FormControl('',[Validators.required]),
        dob:new FormControl('',[Validators.required]),
        phone_number:new FormControl('',[Validators.required,Validators.pattern(new RegExp("[0-9 ]{10}"))]),
        address:new FormControl('',[Validators.required]),
        role_id:new FormControl('',[Validators.required]),
      })
    })

  }

  disabledDate = (current: Date): boolean =>
  // Can not select days before today and today
  differenceInCalendarDays(current, this.today) > 0;


  saveUser(){
    // console.log(this.userForm.value);
    this.subscribeOnce( this.adminService.createUser(this.userForm.value),(res:any)=>{
      this.commonService.notifySuccess(res)
      if(res.code=200) this.navigate('/admin')
    })

  }
}
