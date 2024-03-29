import { SurveyService } from './../survey.service';
import { Survey } from './../Survey';
import { Component, OnInit } from '@angular/core';
import { Choice } from '../Choice';

@Component({
    selector: 'app-vote',
    templateUrl: './vote.component.html',
    styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

    isLoaded: boolean = false
    survey: Survey = null
    choices: Array<Choice> = null

    constructor(private surveyService: SurveyService) { }

    ngOnInit(): void {
        this.loadSurveyAndChoice();
    }

    loadSurveyAndChoice(): void {
        let jsonSurvey = localStorage.getItem("survey")
        this.survey = JSON.parse(jsonSurvey)
        localStorage.setItem("idSurvey", this.survey.id + "")
        /*
        this.surveyService.getChoice(this.survey.id).then( result => {
            this.choices = result
            this.isLoaded = true
        })
        */
        this.surveyService.getChoice2(this.survey.id).subscribe( result => {
            this.choices = result
            this.isLoaded = true
        })
    }
}
