import { SurveyService } from './../survey.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getSurveys() {
    let surveyService = new SurveyService()
    surveyService.getSurvey()
  }

}
