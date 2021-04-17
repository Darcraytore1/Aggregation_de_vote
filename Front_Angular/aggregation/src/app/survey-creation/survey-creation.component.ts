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
    form = this.fb.group({
        username: ['',Validators.required],
        email: ['',Validators.email],
        password: ['',Validators.required]
    });

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
    }

    add(e): void {

        if (!this.listChoice.includes(this.choice) && this.choice !== ""){

            let allChoices = document.getElementById("all_choices");

            let i = 0

            i = i+1;

            let label = document.createElement("label");
            label.innerHTML = this.choice + '<button id="button' + i + '" type="button" class="close margin-left" aria-label="Close" onClick="remove('+i+')"><span aria-hidden="true">&times;</span></button>';
            label.id = 'label' + i;

            let br = document.createElement("br");
            br.id = 'br' + i;


            allChoices.appendChild(label);
            allChoices.appendChild(br);

            /*
            localStorage.setItem("index","" + i);
            localStorage.setItem(allChoices.id, allChoices.innerHTML);
            */

            this.listChoice.push(this.choice)
            console.log(this.listChoice)
        }
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
