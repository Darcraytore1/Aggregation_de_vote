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
    @Output() surveyName: EventEmitter<string> = new EventEmitter<string>();

	constructor(private router: Router, private surveyService: SurveyService, private aggregationMethodsService: AggregationMethodsService) { }

	ngOnInit(): void {
	}

    vote(): void {
        let jsonSurvey = JSON.stringify(this.survey)
        localStorage.setItem("survey", jsonSurvey);
        this.router.navigate(['vote']);
    }

    result(): void {

        /*
        this.surveyService.getVoteNote(this.survey.id).then(result => {
            let jsonVote = JSON.stringify(result)
            aggregationMethodsService.getSurveyResult(jsonVote).then(result => {
                this.notify.emit(result)
                this.surveyName.emit(this.survey.name)
            })
        })
        */

        this.surveyService.getVoteNote2(this.survey.id).subscribe(result => {
            let jsonVote = JSON.stringify(result)
            this.aggregationMethodsService.getSurveyResult2(jsonVote).subscribe(result => {
                this.notify.emit(result)
                this.surveyName.emit(this.survey.name)
            })
        })
    }
}
