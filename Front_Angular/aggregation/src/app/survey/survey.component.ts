import { AggregationMethodsService } from './../aggregation-methods.service';
import { SurveyService } from './../survey.service';
import { SurveyResult } from './../SurveyResult';
import { Router } from '@angular/router';
import { Survey } from './../Survey';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

	@Input() survey: Survey = null;
    @Output() notify: EventEmitter<SurveyResult> = new EventEmitter<SurveyResult>();

	constructor(private router: Router) { }

	ngOnInit(): void {
	}

    vote(): void {
        let jsonSurvey = JSON.stringify(this.survey)
        localStorage.setItem("survey", jsonSurvey);
        this.router.navigate(['vote']);
    }

    result(): void {
        let surveyService = new SurveyService();
        let aggregationMethodsService = new AggregationMethodsService()

        surveyService.getVoteNote(this.survey.id).then(result => {
            let jsonVote = JSON.stringify(result)
            aggregationMethodsService.getSurveyResult(jsonVote).then(result => {
                this.notify.emit(result)
            })
        })
    }
}
