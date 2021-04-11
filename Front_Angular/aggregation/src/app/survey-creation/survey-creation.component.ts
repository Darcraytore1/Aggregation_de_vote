import { Survey } from './../Survey';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-creation',
  templateUrl: './survey-creation.component.html',
  styleUrls: ['./survey-creation.component.css']
})
export class SurveyCreationComponent implements OnInit {

    survey: Survey = null
    listChoice: Array<string> = new Array<string>()

    constructor() { }

    ngOnInit(): void {
    }

}
