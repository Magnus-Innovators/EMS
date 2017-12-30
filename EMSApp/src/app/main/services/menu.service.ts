import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() { }

  getLargeMenu(role: string): Array<any> {
    if (role === 'admin') {
      return [
        {caption: 'Home',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-home': true},
          action: 'admin'},
        {caption: 'Users',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-user': true},
          action: 'admin-users'},
        {caption: 'Grades & Sections',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-education': true},
          action: 'admin-grades'},
        {caption: 'Subjects & Topics',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-blackboard': true},
          action: 'admin-subjects'},
        {caption: 'Tests',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-check': true},
          action: 'admin-tests'},
        {caption: 'Communication',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-bullhorn': true},
          action: 'admin-communication'},
        {caption: 'Reports',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-signal': true},
          action: 'admin-reports'}
      ];
    } else if (role === 'teacher') {
      return [
        {caption: 'Home',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-home': true},
          action: 'teacher'},
        {caption: 'Students',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-user': true},
          action: 'teacher-students'},
        {caption: 'Assignments',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-tasks': true},
          action: 'teacher-assignments'},
        {caption: 'Reviews',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-search': true},
          action: 'teacher-reviews'},
        {caption: 'Messages',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-envelope': true},
          action: 'teacher-messages'}
      ];
    } else if (role === 'student') {
      return [
        {caption: 'Home',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-home': true},
          action: 'student'},
        {caption: 'Friends',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-pawn': true},
          action: 'student-friends'},
        {caption: 'Assignments',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-tasks': true},
          action: 'student-assignments'},
        {caption: 'Reports',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-stats': true},
          action: 'student-reports'},
        {caption: 'Messages',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-envelope': true},
          action: 'student-messages'}
      ];
    }  else if (role === 'parent') {
      return [
        {caption: 'Home',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-home': true},
          action: 'parent'},
        {caption: 'Scores',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-education': true},
          action: 'parent-scores'},
        {caption: 'Messages',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-envelope': true},
          action: 'parent-messages'}
      ];
    }  else if (role === 'management') {
      return [
        {caption: 'Home',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-home': true},
          action: 'management'},
        {caption: 'Messages',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-envelope': true},
          action: 'management-messages'},
        {caption: 'Reports',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-signal': true},
          action: 'management-reports'}
      ];
    }
  }

  getMediumMenu(role: string): Array<any> {
    if (role === 'admin') {
      return [
        {caption: 'Home',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-home': true},
          action: 'admin'},
        {caption: 'Users',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-user': true},
          action: 'admin-users'},
        {caption: 'Grades & Sections',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-education': true},
          action: 'admin-grades'},
        {caption: 'Subjects & Topics',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-blackboard': true},
          action: 'admin-subjects'},
        {caption: 'Tests',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-check': true},
          action: 'admin-tests'},
        {caption: 'Communication',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-bullhorn': true},
          action: 'admin-communication'},
        {caption: 'Reports',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-signal': true},
          action: 'admin-reports'}
      ];
    } else if (role === 'teacher') {
      return [
        {caption: 'Home',
        style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-home': true},
        action: 'teacher'},
      {caption: 'Students',
        style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-user': true},
        action: 'teacher-students'},
      {caption: 'Assignments',
        style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-tasks': true},
        action: 'teacher-assignments'},
      {caption: 'Reviews',
        style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-search': true},
        action: 'teacher-reviews'},
      {caption: 'Messages',
        style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-envelope': true},
        action: 'teacher-messages'}
      ];
    }  else if (role === 'student') {
      return [
        {caption: 'Home',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-home': true},
          action: 'student'},
        {caption: 'Friends',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-pawn': true},
          action: 'student-friends'},
        {caption: 'Assignments',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-tasks': true},
          action: 'student-assignments'},
        {caption: 'Reports',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-stats': true},
          action: 'student-reports'},
        {caption: 'Messages',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-envelope': true},
          action: 'student-messages'}
      ];
    }  else if (role === 'parent') {
      return [
        {caption: 'Home',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-home': true},
          action: 'parent'},
        {caption: 'Scores',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-education': true},
          action: 'parent-scores'},
        {caption: 'Messages',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-envelope': true},
          action: 'parent-messages'}
      ];
    }  else if (role === 'management') {
      return [
        {caption: 'Home',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-home': true},
          action: 'management'},
        {caption: 'Messages',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-envelope': true},
          action: 'management-messages'},
        {caption: 'Reports',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-signal': true},
          action: 'admin-subjects'}
      ];
    }
  }


  getSmallMenu(role: string): Array<any> {
    if (role === 'admin') {
      return [
        {caption: 'Home',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-home': true},
          action: 'admin'},
        {caption: 'Users',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-user': true},
          action: 'admin-users'},
        {caption: 'Grades & Sections',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-education': true},
          action: 'admin-grades'},
        {caption: 'Subjects & Topics',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-blackboard': true},
          action: 'admin-subjects'},
        {caption: 'Communication',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-bullhorn': true},
          action: 'admin-communication'},
        {caption: 'Reports',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-signal': true},
          action: 'admin-reports'}
      ];
    } else if (role === 'teacher') {
      return [
        {caption: 'Home',
        style: {'showopacity': true, 'glyphicon': true, 'glyphicon-home': true},
        action: 'teacher'},
      {caption: 'Students',
        style: {'showopacity': true, 'glyphicon': true, 'glyphicon-user': true},
        action: 'teacher-students'},
      {caption: 'Assignments',
        style: {'showopacity': true, 'glyphicon': true, 'glyphicon-tasks': true},
        action: 'teacher-assignments'},
      {caption: 'Reviews',
        style: {'showopacity': true, 'glyphicon': true, 'glyphicon-search': true},
        action: 'teacher-reviews'},
      {caption: 'Messages',
        style: {'showopacity': true, 'glyphicon': true, 'glyphicon-envelope': true},
        action: 'teacher-messages'}
      ];
    }  else if (role === 'student') {
      return [
        {caption: 'Home',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-home': true},
          action: 'student'},
        {caption: 'Friends',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-pawn': true},
          action: 'student-friends'},
        {caption: 'Assignments',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-tasks': true},
          action: 'student-assignments'},
        {caption: 'Reports',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-stats': true},
          action: 'student-reports'},
        {caption: 'Messages',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-envelope': true},
          action: 'student-messages'}
      ];
    }  else if (role === 'parent') {
      return [
        {caption: 'Home',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-home': true},
          action: 'parent'},
        {caption: 'Scores',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-education': true},
          action: 'parent-scores'},
        {caption: 'Messages',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-envelope': true},
          action: 'parent-messages'}
      ];
    }  else if (role === 'management') {
      return [
        {caption: 'Home',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-home': true},
          action: 'management'},
        {caption: 'Messages',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-envelope': true},
          action: 'management-messages'},
        {caption: 'Reports',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-signal': true},
          action: 'admin-subjects'}
      ];
    }
  }


}
