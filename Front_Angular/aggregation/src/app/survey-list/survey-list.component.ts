import { SurveyResult } from './../SurveyResult';
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
    surveyResult: SurveyResult = null

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

    onNotifyClicked(surveyResult: SurveyResult): void {
        this.surveyResult = surveyResult
    }

    anotherSurveyResult(): void {
        this.surveyResult = null
    }

    logSurveyResult(): void {
        console.log(this.surveyResult)
    }
}
