import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyResultDisplayerComponent } from './survey-result-displayer.component';

describe('SurveyResultDisplayerComponent', () => {
  let component: SurveyResultDisplayerComponent;
  let fixture: ComponentFixture<SurveyResultDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyResultDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyResultDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
