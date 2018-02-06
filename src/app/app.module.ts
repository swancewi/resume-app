import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { EmployeeBlurbComponent } from './employee-blurb/employee-blurb.component';
import { EmployeeProjectsComponent } from './employee-projects/employee-projects.component';
import { EmployeeAllComponent } from './employee-all/employee-all.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ProjectAllComponent } from './project-all/project-all.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { EmployeeBackgroundComponent } from './employee-background/employee-background.component';
import { MessageService } from './message.service';
import { EmployeeService } from './employee.service';
import { ProjectService } from './project.service';
import { HttpClientModule } from '@angular/common/http';
import { ResumeComponent } from './resume/resume.component';
import { EmployeeHeaderComponent } from './employee-header/employee-header.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeBlurbComponent,
    EmployeeProjectsComponent,
    EmployeeAllComponent,
    EmployeeDetailComponent,
    ProjectAllComponent,
    ProjectDetailComponent,
    EmployeeBackgroundComponent,
    ResumeComponent,
    EmployeeHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [MessageService, EmployeeService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
