import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyDisplayerComponent } from './survey-displayer.component';

describe('SurveyDisplayerComponent', () => {
  let component: SurveyDisplayerComponent;
  let fixture: ComponentFixture<SurveyDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
