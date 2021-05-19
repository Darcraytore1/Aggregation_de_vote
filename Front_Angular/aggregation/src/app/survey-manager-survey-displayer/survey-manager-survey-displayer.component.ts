import { SurveyResult } from './../SurveyResult';
import { AggregationMethodsService } from './../aggregation-methods.service';
import { SurveyService } from './../survey.service';
import { Survey } from './../Survey';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-survey-manager-survey-displayer',
    templateUrl: './survey-manager-survey-displayer.component.html',
    styleUrls: ['./survey-manager-survey-displayer.component.css']
})
export class SurveyManagerSurveyDisplayerComponent implements OnInit {

    @Input() survey: Survey
    @Output() notify: EventEmitter<SurveyResult> = new EventEmitter<SurveyResult>();
    @Output() surveyName: EventEmitter<string> = new EventEmitter<string>();
    surveyResult: SurveyResult = null

    constructor(private surveyService: SurveyService, private aggregationMethodsService: AggregationMethodsService) { }

    ngOnInit(): void {
    }

    result(): void {

        /*
        this.surveyService.getVoteNote(this.survey.id).then(result => {
            let jsonVote = JSON.stringify(result)
            aggregationMethodsService.getSurveyResult(jsonVote).then(result => {
                this.surveyResult = result
                this.notify.emit(this.surveyResult)
                this.surveyName.emit(this.survey.name)
            })
        })
        */

        this.surveyService.getVoteNote2(this.survey.id).subscribe(result => {
            let jsonVote = JSON.stringify(result)
            this.aggregationMethodsService.getSurveyResult2(jsonVote).subscribe(result => {
                this.surveyResult = result
                this.notify.emit(this.surveyResult)
                this.surveyName.emit(this.survey.name)
            })
        })
    }

    closeSurvey(): void {
        /*
        this.surveyService.closeSurvey(this.survey.id).then( result => {
            this.survey.isActive = false
            console.log(result)
        })
        */

        this.surveyService.closeSurvey2(this.survey.id).subscribe( result => {
            this.survey.isActive = false
            console.log(result)
        })
    }
}
