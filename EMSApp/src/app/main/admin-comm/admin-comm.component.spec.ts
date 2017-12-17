import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommComponent } from './admin-comm.component';

describe('AdminCommComponent', () => {
  let component: AdminCommComponent;
  let fixture: ComponentFixture<AdminCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
