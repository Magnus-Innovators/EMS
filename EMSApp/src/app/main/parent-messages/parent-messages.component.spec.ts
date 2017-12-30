import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentMessagesComponent } from './parent-messages.component';

describe('ParentMessagesComponent', () => {
  let component: ParentMessagesComponent;
  let fixture: ComponentFixture<ParentMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
