import { UserService } from './../../services/user/user.service';
import { AuthService } from './../../services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  today = new Date();
  imageData: string = '';
  public role = 2;
  public isEditMode: boolean = false;
  public isEnable: boolean = true;
  public defaultAvatar = "assets/avatar/1.jpg";

  constructor(private fb: FormBuilder,
    private _router: Router,
    private common: CommonService,
    private userService: UserService,
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ) { super() }
  public user: any;
  @ViewChild('avatarImage') input!: ElementRef<HTMLInputElement>;;
  public userForm!: FormGroup;

  handleChangeAvatar() {
    this.input.nativeElement.click();
  }
  override  postInit(): void {

    console.log(this.user);

    this.userForm = this.fb.group({
      job: new FormControl(this?.user?.job || "", [Validators.required]),
      dob: new FormControl(this?.user?.dob || "", [Validators.required]),
      tel: new FormControl(this?.user?.tel || "", [Validators.required, Validators.pattern(new RegExp("[0-9 ]{10}"))]),
      address: new FormControl(this.user?.address || "", [Validators.required]),
      avatar: new FormControl(),
    })
  }

  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, this.today) > 0;


  override async preInit() {
    const paramId = await this.route.snapshot.paramMap.get("id");
    const checkLogined = this.common.logined$.getValue();
    const user = this.common.user$.getValue();
    let currentId = paramId || user.id;
    console.log(currentId);


    await this.subscribeUntilDestroy(this.userService.getUserInfo({ id: currentId }), (data: any) => {
      this.user = data.user;
      this.imageData = this.user.avatar;
      console.log(this.formatDate("2022-10-27"));
      this.userForm = this.fb.group({
        job: new FormControl(this?.user?.job || "", [Validators.required]),
        dob: new FormControl(this.formatDate(this.user.dob) || "", [Validators.required]),
        tel: new FormControl(this?.user?.tel || "", [Validators.required, Validators.pattern(new RegExp("[0-9 ]{10}"))]),
        address: new FormControl(this.user?.address || "", [Validators.required]),
        image: new FormControl(),
      })

    })
    console.log("check", checkLogined);

  }
  public onChange(result: Date) {
    this.userForm.setValue({ ...this.userForm.value, dob: formatISO(result, { representation: 'date' }) })
  }
  public formatDate(input: any) {
    var datePart = input.split("-");


    return datePart[1] + "/" + datePart[2] + "/" + datePart[0];
  }

  public toggleLogin() {
    this._router.navigate(['/login'], { queryParams: { isRegister: false } })
  }
  public toggleRegister() {
    this._router.navigate(['/login'])

  }
  public navigate(navigateAddress: string) {
    this._router.navigate(['/home'])
  }

  onFileSelect(event: Event): void {
    // @ts-ignore: Object is possibly 'null'.
    const file = (event.target as HTMLInputElement)?.files[0];
    const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    this.userForm.patchValue({ image: file });

    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
      console.log(file);
    }
  }
  saveUser() {


    this.subscribeOnce(this.userService.saveUser(this.userForm.value), (res: any) => {
      console.log(res);

    })
  }
  toggleEdit() {
    this.isEditMode = !this.isEditMode;
  }
}

