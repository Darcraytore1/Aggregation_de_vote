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
    error: number = 0
    successMessage: string = ""

    constructor(private surveyService: SurveyService) { }

    ngOnInit(): void {
    }

    sendVote(): void {
        this.error = 0
        let jsonSurvey = localStorage.getItem('idSurvey')
        let surveyId = parseInt(JSON.parse(jsonSurvey))

        let jsonUserId = localStorage.getItem('id')
        let userId = parseInt(JSON.parse(jsonUserId))

        let voteList = []
        let idChoice: number
        let note: number

        this.sons?.forEach( vote => {
            idChoice = vote.choice.id
            note = vote.note
            if (note < 0 || note > 1){
                this.error = 1
                this.successMessage = "Veuillez rentrez des notes seulement entre 0 et 1"
            }
            voteList.push({"idChoice" : idChoice, "note" : note})
        })

        if (this.error == 0) {
            this.surveyService.vote(surveyId, voteList, userId).then( result => {
                this.error = result;
                console.log(this.error)
                if (this.error == 2) this.successMessage = "Votre vote n'a pas été compté car vous avez déjà voté pour ce sondage"
                else if(this.error == 1) this.successMessage = "Votre vote a bien été compté"
            })
        }
    }
}
