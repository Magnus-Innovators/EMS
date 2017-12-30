import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentScoresComponent } from './parent-scores.component';

describe('ParentScoresComponent', () => {
  let component: ParentScoresComponent;
  let fixture: ComponentFixture<ParentScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
