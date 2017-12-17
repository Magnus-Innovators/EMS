import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { MenuService } from './services/menu.service';
import { RouterModule } from '@angular/router';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminGradesComponent } from './admin-grades/admin-grades.component';
import { AdminSubjectsComponent } from './admin-subjects/admin-subjects.component';
import { AdminTestsComponent } from './admin-tests/admin-tests.component';
import { AdminCommComponent } from './admin-comm/admin-comm.component';
import { AdminReportsComponent } from './admin-reports/admin-reports.component';
import { TeacherMainComponent } from './teacher-main/teacher-main.component';
import { ParentMainComponent } from './parent-main/parent-main.component';
import { StudentMainComponent } from './student-main/student-main.component';
import { ManagementMainComponent } from './management-main/management-main.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'admin', component: AdminMainComponent, outlet: 'subroute'},
      {path: 'admin-users', component: AdminUsersComponent, outlet: 'subroute'},
      {path: 'admin-grades', component: AdminGradesComponent, outlet: 'subroute'},
      {path: 'admin-subjects', component: AdminSubjectsComponent, outlet: 'subroute'},
      {path: 'admin-tests', component: AdminTestsComponent, outlet: 'subroute'},
      {path: 'admin-communication', component: AdminCommComponent, outlet: 'subroute'},
      {path: 'admin-reports', component: AdminReportsComponent, outlet: 'subroute'},
      {path: 'teacher', component: TeacherMainComponent, outlet: 'subroute'},
      {path: 'parent', component: ParentMainComponent, outlet: 'subroute'},
      {path: 'student', component: StudentMainComponent, outlet: 'subroute'},
      {path: 'management', component: ManagementMainComponent, outlet: 'subroute'}
    ])
  ],
  declarations: [AdminMainComponent,
                 AdminUsersComponent,
                 AdminGradesComponent,
                 AdminSubjectsComponent,
                 AdminTestsComponent,
                 AdminCommComponent,
                 AdminReportsComponent,
                 TeacherMainComponent,
                 ParentMainComponent,
                 StudentMainComponent,
                 ManagementMainComponent],
  providers: [MenuService]
})
export class MainModule { }
