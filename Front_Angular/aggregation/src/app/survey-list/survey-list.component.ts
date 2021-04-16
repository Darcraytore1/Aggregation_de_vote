import { Survey } from './../Survey';
import { SurveyService } from './../survey.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {

    surveyList: Array<Survey> = null
    isCreated: boolean = false
    constructor() { }

    ngOnInit(): void {
    }

    getSurveyList(): void {
        if (this.isCreated == false) {
            let surveyService = new SurveyService()
            surveyService.getSurveys().then( result => {
                this.surveyList = result
                this.isCreated = true
            })
        }
    }
}
