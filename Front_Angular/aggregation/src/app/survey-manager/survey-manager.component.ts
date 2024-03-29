import { SurveyResult } from './../SurveyResult';
import { SurveyService } from './../survey.service';
import { Component, OnInit } from '@angular/core';
import { Survey } from '../Survey';

@Component({
    selector: 'app-survey-manager',
    templateUrl: './survey-manager.component.html',
    styleUrls: ['./survey-manager.component.css']
})
export class SurveyManagerComponent implements OnInit {

    // Les surveys que l'admin a cree
    surveys: Array<Survey>
    isLoaded: boolean = false
    surveyResult: SurveyResult = null
    surveyName: string = ""

    constructor(private surveyService: SurveyService) { }

    ngOnInit(): void {
        this.loadSurvey()
    }

    loadSurvey(): void {
        let idAdmin = parseInt(localStorage.getItem('id'))

        /*
        this.surveyService.getAdminSurveys(idAdmin).then( result => {
            this.surveys = result
            this.isLoaded = true
        })
        */

        this.surveyService.getAdminSurveys2(idAdmin).subscribe( result => {
            this.surveys = result
            this.isLoaded = true
        })
    }

    onNotifyClicked(surveyResult: SurveyResult): void {
        this.surveyResult = surveyResult
    }

    onSurveyNameClicked(surveyName: string): void {
        this.surveyName = surveyName
    }

    anotherSurveyResult(): void {
        this.surveyResult = null
    }
}
