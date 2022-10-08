import { UserService } from './../services/user/user.service';
import { BaseComponent } from 'src/app/core/base/base/base.component';
import { Component, OnInit } from '@angular/core';
import { zooEventsData } from './data';
import { extend } from '@syncfusion/ej2-base';
import {
  EventSettingsModel, View, EventRenderedArgs, DayService, WeekService, WorkWeekService,
  MonthService, AgendaService, ResizeService, DragAndDropService
} from '@syncfusion/ej2-angular-schedule';
import { CommonService } from '../services/common.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { format, formatISO } from "date-fns";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent extends BaseComponent implements OnInit {
  public listTime = ['00:00:00', '00:30:00', '01:00:00', '01:30:00', '02:00:00', '02:30:00', '03:00:00', '03:30:00', '04:00:00', '04:30:00', '05:00:00', '05:30:00', '06:00:00', '06:30:00', '07:00:00', '07:30:00', '08:00:00', '08:30:00', '09:00:00', '09:30:00', '10:00:00', '10:30:00', '11:00:00', '11:30:00', '12:00:00', '12:30:00', '13:00:00', '13:30:00', '14:00:00', '14:30:00', '15:00:00', '15:30:00', '16:00:00', '16:30:00', '17:00:00', '17:30:00', '18:00:00', '18:30:00', '19:00:00', '19:30:00', '20:00:00', '20:30:00', '21:00:00', '21:30:00', '22:00:00', '22:30:00', '23:00:00', '23:30:00'];
  public data!: Record<string, any>[];
  public selectedDate: Date = new Date();
  public isVisible = false;
  isConfirmLoading = false;
  public eventSettings!: EventSettingsModel;
  public currentView: View = 'Week';
  public searchForm = this.fb.group({
    date_start: new FormControl(),
    date_end: new FormControl(),
    time_start: new FormControl(),
    time_end: new FormControl(),
    level: new FormControl(),
  });
  constructor(
    private userService: UserService,
    private commonService: CommonService,
    private fb: FormBuilder
  ) {
    super()
  }

  override async preInit() {
    await this.subscribeOnce(this.userService.getMySchedule(), (data: any) => {
      console.log(data);
      const dataMap = this.handleMapData(data.schedules);
      console.log(dataMap);

      this.data = extend([], dataMap, null, true) as Record<string, any>[];
      this.eventSettings = { dataSource: this.data };
    })
  }

  public async addSchedule() {
    this.commonService.setLoading(true)
    let { date_start, date_end, time_start, time_end, level } = this.searchForm.value;
    date_start = formatISO(date_start, { representation: 'date' });
    date_end = formatISO(date_end, { representation: 'date' });
    console.log(date_start);
    console.log(date_end);

    await this.subscribeUntilDestroy(this.userService.addSchedule({
      from: date_start + " " + time_start,
      to: date_end + " " + time_end, level: level
    }), (res: any) => {

    })
    this.commonService.setLoading(true)

  }

  public handleMapData(data: any) {
    return data.map((item: any) => {
      const checkAssigned = item?.assigned_by;
      let color = "#2cc91d";
      if (!checkAssigned) {
        color = "#caeb1b";
      }
      return {
        Id: item.id,
        Subject: item.level,
        StartTime: new Date(item.time_begin),
        EndTime: new Date(item.time_end),
        CategoryColor: color
      }

    })
  }

  public onEventRendered(args: EventRenderedArgs): void {
    const categoryColor: string = args.data['CategoryColor'] as string;
    if (!args.element || !categoryColor) {
      return;
    }
    if (this.currentView === 'Agenda') {
      (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
    } else {
      args.element.style.backgroundColor = categoryColor;
    }
  }
  showModal(): void {
    // this.scheduleId = data;
    this.isVisible = true;
  }

  async handleOk() {
    this.commonService.setLoading(true);
    this.addSchedule();
    this.commonService.setLoading(false);
    this.isConfirmLoading = true;
    this.isVisible = false;

  }

  handleCancel(): void {
    this.isVisible = false;
  }



}
