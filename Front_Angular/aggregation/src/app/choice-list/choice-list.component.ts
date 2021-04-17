import { SurveyService } from './../survey.service';
import { ChoiceComponent } from './../choice/choice.component';
import { Choice } from './../Choice';
import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
    selector: 'app-choice-list',
    templateUrl: './choice-list.component.html',
    styleUrls: ['./choice-list.component.css']
})
export class ChoiceListComponent implements OnInit {

    @Input() choices: Array<Choice> = null
    @ViewChildren (ChoiceComponent) sons: QueryList<ChoiceComponent> | undefined

    constructor() { }

    ngOnInit(): void {
    }

    sendVote(): void {
        let jsonSurvey = localStorage.getItem('idSurvey')
        let surveyId = parseInt(JSON.parse(jsonSurvey))
        let surveyService = new SurveyService()
        let voteList = []
        let idChoice: number
        let note: number

        this.sons?.forEach( vote => {
            idChoice = vote.choice.id
            note = vote.note
            voteList.push({"idChoice" : idChoice, "note" : note})
        })

        surveyService.vote(surveyId, voteList).then( result => {
            console.log(result)
        })
    }
}
