import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyManagerComponent } from './survey-manager.component';

describe('SurveyManagerComponent', () => {
  let component: SurveyManagerComponent;
  let fixture: ComponentFixture<SurveyManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
