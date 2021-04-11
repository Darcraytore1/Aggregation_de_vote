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

    handleFileInput(files: FileList): void {
        let fileToUse = files.item(0)
        let fileReader = new FileReader()
        /*
        let json: string | ArrayBuffer
        fileReader.onload = function(event) {
            json = fileReader.result
        }
        fileReader.readAsText(fileToUse)
        */
    }

    getSurveyResult(): void {
        let agr = new AggregationMethodsService()
        agr.getSurveyResult(this.surveyJson).then(result => {
            console.log(result)
        })
    }
}
