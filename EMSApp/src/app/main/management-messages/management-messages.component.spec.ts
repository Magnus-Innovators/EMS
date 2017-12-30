import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementMessagesComponent } from './management-messages.component';

describe('ManagementMessagesComponent', () => {
  let component: ManagementMessagesComponent;
  let fixture: ComponentFixture<ManagementMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
