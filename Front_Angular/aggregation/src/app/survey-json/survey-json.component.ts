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

    fileToSend: File = null

    constructor() { }

    ngOnInit(): void {
    }

    handleFileInput(e): void {
        this.fileToSend = e.target.files[0]
    }

    getSurveyResult(): void {
        let agr = new AggregationMethodsService()
        agr.getFileContent(this.fileToSend).then(result => {
            console.log(result)
        })
    }
}
