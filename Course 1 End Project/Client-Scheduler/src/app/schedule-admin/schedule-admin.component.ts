import { Component } from '@angular/core';
import { ScheduleModel } from '../schedule-model';

@Component({
  selector: 'app-schedule-admin',
  templateUrl: './schedule-admin.component.html',
  styleUrls: ['./schedule-admin.component.css']
})
export class ScheduleAdminComponent {
  model:ScheduleModel = new ScheduleModel()
  models:Array<ScheduleModel> = [{fname:"Tom",lname:"Smith",email:"t.smith@gmail.com",id:0,client_id:1,date:"11-30-2023",time:"09:30 AM"}]

  selectSchedule(id:number):void{
    let model = this.models.filter(ref => {ref.id = id})
  }
  editSchedule():void{
  }
  deleteSchedule(id:number):void{
  }

}
