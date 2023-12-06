import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientSchedulerComponent } from './client-scheduler/client-scheduler.component';
import { ScheduleAdminComponent } from './schedule-admin/schedule-admin.component';

const routes: Routes = [
  {path:"meeting-scheduler",component:ClientSchedulerComponent},
  {path:"schedule-admin",component:ScheduleAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
