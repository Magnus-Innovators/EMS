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
import { ManagementMainComponent } from './management-main/management-main.component';
import { ManagementMessagesComponent } from './management-messages/management-messages.component';
import { ManagementReportsComponent } from './management-reports/management-reports.component';
import { TeacherMainComponent } from './teacher-main/teacher-main.component';
import { TeacherStudentsComponent } from './teacher-students/teacher-students.component';
import { TeacherAssignmentsComponent } from './teacher-assignments/teacher-assignments.component';
import { TeacherReviewsComponent } from './teacher-reviews/teacher-reviews.component';
import { TeacherMessagesComponent } from './teacher-messages/teacher-messages.component';
import { ParentMainComponent } from './parent-main/parent-main.component';
import { ParentScoresComponent } from './parent-scores/parent-scores.component';
import { ParentMessagesComponent } from './parent-messages/parent-messages.component';
import { StudentMainComponent } from './student-main/student-main.component';
import { StudentFriendsComponent } from './student-friends/student-friends.component';
import { StudentAssignmentsComponent } from './student-assignments/student-assignments.component';
import { StudentReportsComponent } from './student-reports/student-reports.component';
import { StudentMessagesComponent } from './student-messages/student-messages.component';

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
      {path: 'management', component: ManagementMainComponent, outlet: 'subroute'},
      {path: 'management-messages', component: ManagementMessagesComponent, outlet: 'subroute'},
      {path: 'management-reports', component: ManagementReportsComponent, outlet: 'subroute'},
      {path: 'teacher', component: TeacherMainComponent, outlet: 'subroute'},
      {path: 'teacher-students', component: TeacherStudentsComponent, outlet: 'subroute'},
      {path: 'teacher-assignments', component: TeacherAssignmentsComponent, outlet: 'subroute'},
      {path: 'teacher-reviews', component: TeacherReviewsComponent, outlet: 'subroute'},
      {path: 'teacher-messages', component: TeacherMessagesComponent, outlet: 'subroute'},
      {path: 'parent', component: ParentMainComponent, outlet: 'subroute'},
      {path: 'parent-scores', component: ParentScoresComponent, outlet: 'subroute'},
      {path: 'parent-messages', component: ParentMessagesComponent, outlet: 'subroute'},
      {path: 'student', component: StudentMainComponent, outlet: 'subroute'},
      {path: 'student-friends', component: StudentFriendsComponent, outlet: 'subroute'},
      {path: 'student-assignments', component: StudentAssignmentsComponent, outlet: 'subroute'},
      {path: 'student-reports', component: StudentReportsComponent, outlet: 'subroute'},
      {path: 'student-messages', component: StudentMessagesComponent, outlet: 'subroute'}
    ])
  ],
  declarations: [AdminMainComponent,
                AdminUsersComponent,
                AdminGradesComponent,
                AdminSubjectsComponent,
                AdminTestsComponent,
                AdminCommComponent,
                AdminReportsComponent,
                ManagementMainComponent,
                ManagementMessagesComponent,
                ManagementReportsComponent,
                TeacherMainComponent,
                TeacherStudentsComponent,
                TeacherAssignmentsComponent,
                TeacherReviewsComponent,
                TeacherMessagesComponent,
                ParentMainComponent,
                ParentScoresComponent,
                ParentMessagesComponent,
                StudentMainComponent,
                StudentFriendsComponent,
                StudentAssignmentsComponent,
                StudentReportsComponent,
                StudentMessagesComponent],
  providers: [MenuService]
})
export class MainModule { }
