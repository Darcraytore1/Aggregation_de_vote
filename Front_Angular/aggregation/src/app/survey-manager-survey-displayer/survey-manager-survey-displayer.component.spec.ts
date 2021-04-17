import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyManagerSurveyDisplayerComponent } from './survey-manager-survey-displayer.component';

describe('SurveyManagerSurveyDisplayerComponent', () => {
  let component: SurveyManagerSurveyDisplayerComponent;
  let fixture: ComponentFixture<SurveyManagerSurveyDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyManagerSurveyDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyManagerSurveyDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
