import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyMenuComponent } from './survey-menu.component';

describe('SurveyMenuComponent', () => {
  let component: SurveyMenuComponent;
  let fixture: ComponentFixture<SurveyMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
