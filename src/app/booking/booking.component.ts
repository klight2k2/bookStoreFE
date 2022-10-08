import { UserService } from './../services/user/user.service';
import { BaseComponent } from 'src/app/core/base/base/base.component';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { format, formatISO } from "date-fns";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent extends BaseComponent implements OnInit {
  public listTime = ['00:00:00', '00:30:00', '01:00:00', '01:30:00', '02:00:00', '02:30:00', '03:00:00', '03:30:00', '04:00:00', '04:30:00', '05:00:00', '05:30:00', '06:00:00', '06:30:00', '07:00:00', '07:30:00', '08:00:00', '08:30:00', '09:00:00', '09:30:00', '10:00:00', '10:30:00', '11:00:00', '11:30:00', '12:00:00', '12:30:00', '13:00:00', '13:30:00', '14:00:00', '14:30:00', '15:00:00', '15:30:00', '16:00:00', '16:30:00', '17:00:00', '17:30:00', '18:00:00', '18:30:00', '19:00:00', '19:30:00', '20:00:00', '20:30:00', '21:00:00', '21:30:00', '22:00:00', '22:30:00', '23:00:00', '23:30:00'];
  public scheduleId!: number;
  public status = "";
  public dataSet: any;

  public isVisible = false;
  isConfirmLoading = false;
  public searchForm = this.fb.group({
    date_start: new FormControl(),
    date_end: new FormControl(),
    time_start: new FormControl(),
    time_end: new FormControl(),
    username: new FormControl(),
  });
  constructor(
    private commonService: CommonService,
    private userService: UserService,
    private _router: Router,
    private fb: FormBuilder

  ) {
    super();
  }
  override async preInit() {
    await this.getAll();

  }
  async getAll() {
    await this.subscribeOnce(this.userService.searchSchedule({
      time_begin: "",
      time_end: "", username: ""
    }), (data: any) => {
      console.log(data);

      this.dataSet = data.schedule;
    })

  }

  async search() {
    this.commonService.setLoading(true)
    let { date_start, date_end, time_start, time_end, username } = this.searchForm.value;
    date_start = formatISO(date_start, { representation: 'date' });
    date_end = formatISO(date_end, { representation: 'date' });
    console.log(date_start);
    console.log(date_end);

    await this.subscribeUntilDestroy(this.userService.searchSchedule({
      time_begin: date_start + " " + time_start,
      time_end: date_end + " " + time_end, username: username
    }), (res: any) => {

    })
    this.commonService.setLoading(true)

  }

  navigate(address: string) {
    this._router.navigate([address]);
  }
  showModal(data: any): void {
    this.scheduleId = data;
    this.isVisible = true;
  }

  async handleOk() {
    this.commonService.setLoading(true);
    await this.subscribeUntilDestroy(this.userService.booking({ id: this.scheduleId }), async (data: any) => {
      console.log(data);
      this.commonService.notifySuccess(data);
      await this.getAll();
      this.commonService.setLoading(false);
    })
    this.isConfirmLoading = true;
    this.isVisible = false;

  }

  handleCancel(): void {
    this.isVisible = false;
  }




}
