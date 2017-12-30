import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFriendsComponent } from './student-friends.component';

describe('StudentFriendsComponent', () => {
  let component: StudentFriendsComponent;
  let fixture: ComponentFixture<StudentFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
