import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsHomeComponent } from './parents-home.component';

describe('ParentsHomeComponent', () => {
  let component: ParentsHomeComponent;
  let fixture: ComponentFixture<ParentsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
