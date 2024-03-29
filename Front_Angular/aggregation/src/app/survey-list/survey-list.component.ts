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
    surveyName: string = ""

    constructor(private surveyService: SurveyService) { }

    ngOnInit(): void {
        this.getSurveyList()
    }

    getSurveyList(): void {
        /*
        if (this.isCreated == false) {
            this.surveyService.getSurveys().then( result => {
                this.surveyList = result
                this.isCreated = true
            })
        }
        */

        if (this.isCreated == false) {
            this.surveyService.getSurveys2().subscribe ( result => {
                this.surveyList = result
                this.isCreated = true
            });
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

    onSurveyNameClicked(surveyName: string): void {
        this.surveyName = surveyName
    }
}
