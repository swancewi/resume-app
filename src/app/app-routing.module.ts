import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeAllComponent } from './employee-all/employee-all.component';
import { ProjectAllComponent } from './project-all/project-all.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeBlurbComponent } from './employee-blurb/employee-blurb.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'employees', component: EmployeeAllComponent },
  { path: 'projects', component: ProjectAllComponent },
  { path: 'employees/:id', component: EmployeeDetailComponent },
  { path: 'employees/resume/:id', component: ResumeComponent},
  { path: 'projects/:id', component: ProjectDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
