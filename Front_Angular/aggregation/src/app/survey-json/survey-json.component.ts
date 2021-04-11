import { HttpClient } from '@angular/common/http';
import { AggregationMethodsService } from './../aggregation-methods.service';
import { Component, OnInit } from '@angular/core';
import { ReadVarExpr } from '@angular/compiler';

@Component({
  selector: 'app-survey-json',
  templateUrl: './survey-json.component.html',
  styleUrls: ['./survey-json.component.css']
})
export class SurveyJSONComponent implements OnInit {

    surveyJson: string = ""

    constructor() { }

    ngOnInit(): void {
    }

    handleFileInput(e): void {
        let file = e.target.files[0]
        console.log(file)
    }

    getSurveyResult(): void {
        let agr = new AggregationMethodsService()
        agr.getSurveyResult(this.surveyJson).then(result => {
            console.log(result)
        })
    }
}
