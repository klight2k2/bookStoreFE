// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-user-info',
//   templateUrl: './user-info.component.html',
//   styleUrls: ['./user-info.component.scss']
// })
// export class UserInfoComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { AuthService } from './../../services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base/base.component';
import { differenceInCalendarDays } from 'date-fns';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { format, formatISO } from "date-fns";
import { CommonService } from 'src/app/services/common.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
   styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent extends BaseComponent implements OnInit {
  radioValue = 'A';
  today = new Date();
  imageData: string = ''; 
  public  isEnable: boolean = true;
  public  isLogin$=new BehaviorSubject<boolean>(true);
  public  isRegister$=new BehaviorSubject<boolean>(true);
  constructor(private fb: FormBuilder,
    private _route:ActivatedRoute,
    private _router:  Router,
    private http:HttpClient,
    private auth:AuthService,
    private localStorageService:LocalStorageService,
    private common:CommonService,
    private notificationService:NotificationService
    ) {super() }
    public registerForm!:FormGroup;

    override  postInit(): void {
        

      this.registerForm=this.fb.group({
        email:new FormControl('',[Validators.required,Validators.email]),
        password:new FormControl('',[Validators.required]),
        role:new FormControl(1,[Validators.required]),
        level:new FormControl("N5",[Validators.required]),
    job:new FormControl("",[Validators.required]),
    username:new FormControl('',[Validators.required]),
    dob:new FormControl('',[Validators.required]),
    tel:new FormControl('',[Validators.required,Validators.pattern(new RegExp("[0-9 ]{10}"))]),
    address:new FormControl('',[Validators.required]),
    image:new FormControl(),
  })
}

  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, this.today) > 0;


  override preInit(): void {
    const checkLogined=this.common.logined$.getValue();
    console.log("check", checkLogined);
  
    // this.ChangeDetectionStrategy.OnPush(this.isLogin$)
    // this.isLogin$=!this._route.snapshot.queryParamMap.get('isRegister')
  }
 public onChange(result:Date){
  console.log(  format(result, 'dd-MMM-yy')  )
  console.log(  formatISO(result, { representation: 'date' })  )
  this.registerForm.value.dob= formatISO(result, { representation: 'date' })
  this.registerForm.setValue({...this.registerForm.value,dob: formatISO(result, { representation: 'date' })})
}

  public toggleLogin(){
   this._router.navigate(['/login'],{queryParams:{isRegister:false}})
  }
  public toggleRegister(){
    this._router.navigate(['/login'])

  }
  public navigate(navigateAddress:string){
    this._router.navigate(['/home'])
  }
  public register(){
    console.log(this.registerForm.value);

    this.subscribeOnce<any>(
    this.auth.register(this.registerForm.value),
      (res:any)=>{
        this.common.notifySuccess(res);
      }
    )
  }
  onFileSelect(event: Event): void {
    // @ts-ignore: Object is possibly 'null'.
    const file = (event.target as HTMLInputElement)?.files[0];
    const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    this.registerForm.patchValue({ image: file });
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
      console.log(file);
    }
  }
}

