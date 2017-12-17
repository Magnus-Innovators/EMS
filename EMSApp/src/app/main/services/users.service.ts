import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  constructor() { }

  getUserName(uid: string): string {
    if (uid === 'admin') {
      return 'Admin User';
    } else if (uid === 'teacher') {
      return 'Paul Doe';
    } else if (uid === 'student') {
      return 'John Doe';
    } else if (uid === 'parent') {
      return 'Mark Doe';
    } else if (uid === 'management') {
      return 'Steven Doe';
    }
  }

  getUserRole(uid: string): string {
    if (uid === 'admin') {
      return 'Administrator';
    } else if (uid === 'teacher') {
      return 'Instructor';
    } else if (uid === 'student') {
      return 'Student';
    } else if (uid === 'parent') {
      return 'Parent';
    } else if (uid === 'management') {
      return 'Management';
    }
  }

}
