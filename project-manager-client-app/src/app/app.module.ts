import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { BsDatepickerModule, ModalModule } from 'ngx-bootstrap';
import { Ng5SliderModule } from 'ng5-slider';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { FilterUserPipe } from './pipes/filter-user.pipe';

import { EventService } from './services/event.service';
import { BaseService } from './services/base.service';
import { UserService } from './services/user.service';
import { ProjectService } from './services/project.service';
import { TaskService } from './services/task.service';

const routes: Routes = [
  { path: '', redirectTo: 'addUser', pathMatch: 'full' },
  { path: 'addUser', component: AddUserComponent },
  { path: 'addProject', component: AddProjectComponent },
  { path: 'addTask', component: AddTaskComponent },
  { path: 'viewTask', component: ViewTaskComponent },
  { path: '**', redirectTo: 'addUser' }
];

@NgModule({
  declarations: [
    AppComponent,
    AddProjectComponent,
    AddUserComponent,
    AddTaskComponent,
    ViewTaskComponent,
    FilterUserPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true }),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    Ng5SliderModule
  ],
  providers: [BaseService,UserService, EventService, ProjectService,TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
