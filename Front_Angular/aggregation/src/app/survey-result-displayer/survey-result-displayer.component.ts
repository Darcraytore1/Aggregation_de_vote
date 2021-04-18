import { SurveyResult } from './../SurveyResult';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-result-displayer',
  templateUrl: './survey-result-displayer.component.html',
  styleUrls: ['./survey-result-displayer.component.css']
})
export class SurveyResultDisplayerComponent implements OnInit {

    @Input() surveyResult: SurveyResult = null
    counter: number = 1

    constructor() { }

    ngOnInit(): void {
    }

    getDetailKeys() {
        return Object.keys(this.surveyResult.details)
    }

    incCounter() {
        this.counter ++
    }

    initCounter() {
        this.counter = 1
    }
}
