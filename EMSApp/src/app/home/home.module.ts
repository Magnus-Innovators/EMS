import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { TeachersHomeComponent } from './teachers-home/teachers-home.component';
import { ParentsHomeComponent } from './parents-home/parents-home.component';
import { SchoolHomeComponent } from './school-home/school-home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: SummaryComponent, outlet: 'subroute'},
      {path: 'students', component: StudentHomeComponent, outlet: 'subroute'},
      {path: 'teachers', component: TeachersHomeComponent, outlet: 'subroute'},
      {path: 'parents', component: ParentsHomeComponent, outlet: 'subroute'},
      {path: 'school', component: SchoolHomeComponent, outlet: 'subroute'}
    ])
  ],
  declarations: [
    SummaryComponent,
    StudentHomeComponent,
    TeachersHomeComponent,
    ParentsHomeComponent,
    SchoolHomeComponent]
})
export class HomeModule { }
