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
    isVoted: boolean = false
    successMessage: string = ""

    constructor() { }

    ngOnInit(): void {
    }

    sendVote(): void {
        let jsonSurvey = localStorage.getItem('idSurvey')
        let surveyId = parseInt(JSON.parse(jsonSurvey))

        let jsonUserId = localStorage.getItem('id')
        let userId = parseInt(JSON.parse(jsonUserId))

        let surveyService = new SurveyService()
        let voteList = []
        let idChoice: number
        let note: number

        this.sons?.forEach( vote => {
            idChoice = vote.choice.id
            note = vote.note
            voteList.push({"idChoice" : idChoice, "note" : note})
        })

        surveyService.vote(surveyId, voteList, userId).then( result => {
            this.isVoted = result
            if(this.isVoted) this.successMessage = "Votre vote a bien été compté"
            else this.successMessage = "Votre vote n'a pas été compté pour une raison ou une autre"
        })
    }
}
