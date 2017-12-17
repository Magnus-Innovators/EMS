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
          action: 'admin-users'},
        {caption: 'Messages',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-envelope': true},
          action: 'admin-grades'},
        {caption: 'Assignments',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-tasks': true},
          action: 'admin-subjects'}
      ];
    } else if (role === 'student') {
      return [
        {caption: 'Home',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-home': true},
          action: 'student'},
        {caption: 'Assignments',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-tasks': true},
          action: 'admin-users'},
        {caption: 'Resources',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-book': true},
          action: 'admin-grades'},
        {caption: 'Messages',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-envelope': true},
          action: 'admin-subjects'}
      ];
    }  else if (role === 'parent') {
      return [
        {caption: 'Home',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-home': true},
          action: 'parent'},
        {caption: 'Assignments',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-tasks': true},
          action: 'admin-users'},
        {caption: 'Messages',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-blackboard': true},
          action: 'admin-subjects'}
      ];
    }  else if (role === 'management') {
      return [
        {caption: 'Home',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-home': true},
          action: 'management'},
        {caption: 'Messages',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-envelope': true},
          action: 'admin-users'},
        {caption: 'Reports',
          style: {'pull-right': true, 'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-signal': true},
          action: 'admin-subjects'}
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
        action: 'admin-users'},
      {caption: 'Messages',
        style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-envelope': true},
        action: 'admin-grades'},
      {caption: 'Assignments',
        style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-tasks': true},
        action: 'admin-subjects'}
      ];
    }  else if (role === 'student') {
      return [
        {caption: 'Home',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-home': true},
          action: 'student'},
        {caption: 'Assignments',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-tasks': true},
          action: 'admin-users'},
        {caption: 'Resources',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-book': true},
          action: 'admin-grades'},
        {caption: 'Messages',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-envelope': true},
          action: 'admin-subjects'}
      ];
    }  else if (role === 'parent') {
      return [
        {caption: 'Home',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-home': true},
          action: 'parent'},
        {caption: 'Assignments',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-tasks': true},
          action: 'admin-users'},
        {caption: 'Messages',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-blackboard': true},
          action: 'admin-subjects'}
      ];
    }  else if (role === 'management') {
      return [
        {caption: 'Home',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-home': true},
          action: 'management'},
        {caption: 'Messages',
          style: {'hidden-xs': true, 'showopacity': true, 'glyphicon': true, 'glyphicon-envelope': true},
          action: 'admin-users'},
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
        action: 'admin-users'},
      {caption: 'Messages',
        style: {'showopacity': true, 'glyphicon': true, 'glyphicon-envelope': true},
        action: 'admin-grades'},
      {caption: 'Assignments',
        style: {'showopacity': true, 'glyphicon': true, 'glyphicon-tasks': true},
        action: 'admin-subjects'}
      ];
    }  else if (role === 'student') {
      return [
        {caption: 'Home',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-home': true},
          action: 'student'},
        {caption: 'Assignments',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-tasks': true},
          action: 'admin-users'},
        {caption: 'Resources',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-book': true},
          action: 'admin-grades'},
        {caption: 'Messages',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-envelope': true},
          action: 'admin-subjects'}
      ];
    }  else if (role === 'parent') {
      return [
        {caption: 'Home',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-home': true},
          action: 'parent'},
        {caption: 'Assignments',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-tasks': true},
          action: 'admin-users'},
        {caption: 'Messages',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-blackboard': true},
          action: 'admin-subjects'}
      ];
    }  else if (role === 'management') {
      return [
        {caption: 'Home',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-home': true},
          action: 'management'},
        {caption: 'Messages',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-envelope': true},
          action: 'admin-users'},
        {caption: 'Reports',
          style: {'showopacity': true, 'glyphicon': true, 'glyphicon-signal': true},
          action: 'admin-subjects'}
      ];
    }
  }


}
