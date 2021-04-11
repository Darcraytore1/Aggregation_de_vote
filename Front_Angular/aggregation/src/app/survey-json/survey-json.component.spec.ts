import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyJSONComponent } from './survey-json.component';

describe('SurveyJSONComponent', () => {
  let component: SurveyJSONComponent;
  let fixture: ComponentFixture<SurveyJSONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyJSONComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
