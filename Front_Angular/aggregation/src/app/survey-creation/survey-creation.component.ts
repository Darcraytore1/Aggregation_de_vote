import { SurveyService } from './../survey.service';
import { Survey } from './../Survey';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-survey-creation',
  templateUrl: './survey-creation.component.html',
  styleUrls: ['./survey-creation.component.css']
})
export class SurveyCreationComponent implements OnInit {

    survey: Survey = new Survey("","",true)
    listChoice: Array<string> = new Array<string>()
    choice: string = ""
    isCreated: boolean = false
    successMessage: string = ""

    constructor() { }

    ngOnInit(): void {
    }

    add(): void {
        if (this.choice !== "" && !this.listChoice.includes(this.choice)) {
            this.listChoice.push(this.choice)
        }
    }

    remove(choice: string): void {
        let index: number = this.listChoice.indexOf(choice)
        this.listChoice.splice(index,1)
    }

    sendSurvey(): void {
        let surveyService = new SurveyService()
        let id_user = parseInt(localStorage.getItem("id"));
        surveyService.createSurvey(this.survey, this.listChoice, id_user).then( result => {
            this.isCreated = result
            if (this.isCreated) this.successMessage = "Votre sondage a bien été créé"
            else this.successMessage = "Votre sondage n'a pas pu être créé pour une raison ou une autre"
        })
    }
}
